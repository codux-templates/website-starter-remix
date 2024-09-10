import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, Link, Form } from '@remix-run/react';
import { userPrefs } from './cookie.server';

export async function loader({ request }: LoaderFunctionArgs) {
    const cookieHeader = request.headers.get('Cookie');
    const cookie = await userPrefs.parse(cookieHeader);
    // If the cookie is not set, show the banner
    // (because the cookie is set only if the banner shouldn't be displayed)
    if (!cookie) {
        return json({ showBanner: true });
    }

    return json({ showBanner: cookie.showBanner });
}

export async function action({ request }: ActionFunctionArgs) {
    const cookieHeader = request.headers.get('Cookie');
    const cookie = (await userPrefs.parse(cookieHeader)) || {};
    const bodyParams = await request.formData();

    if (bodyParams.get('bannerVisibility') === 'hidden') {
        cookie.showBanner = false;
    }

    return redirect('/sessions', {
        headers: {
            'Set-Cookie': await userPrefs.serialize(cookie),
        },
    });
}

export default function CookiePage() {
    const { showBanner } = useLoaderData<typeof loader>();

    return (
        <div>
            {showBanner ? (
                <div>
                    <Link to="/">Dont miss our sale!</Link>
                    <Form method="post">
                        <input type="hidden" name="bannerVisibility" value="hidden" />
                        <button type="submit">Hide</button>
                    </Form>
                </div>
            ) : null}
            <h1>Welcome!</h1>
        </div>
    );
}
