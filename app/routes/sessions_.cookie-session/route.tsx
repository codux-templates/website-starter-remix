import { Form, useLoaderData } from '@remix-run/react';
import { commitCookieSession, getCookieSession } from './cookie-session.server';
import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useState } from 'react';

export const action = async ({ request }: LoaderFunctionArgs) => {
    const infoFromInput = await request.formData();
    const value = infoFromInput.get('_setValue');
    if (!value) {
        return json({ error: 'No value provided' }, { status: 400 });
    }

    const cookieHeader = request.headers.get('Cookie');
    const cookieSession = await getCookieSession(cookieHeader);
    cookieSession.set('value', value);

    return json(
        { value: cookieSession.get('value') },
        {
            headers: {
                'Set-Cookie': await commitCookieSession(cookieSession),
            },
        }
    );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cookieHeader = request.headers.get('Cookie');
    const cookieSession = await getCookieSession(cookieHeader);
    const currentValue =
        cookieSession.get('value') || 'Please enter a value to be stored in the cookie session';

    return json({ currentValue });
};

export default function CookieSessions() {
    const { currentValue } = useLoaderData<typeof loader>();
    const [value, setValue] = useState('');

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value);
    }

    return (
        <div>
            <h1>Cookie sessions!</h1>
            <p>Here we are showing a usage of createCookieSessionStorage function</p>
            <p>The current value is: {currentValue}</p>
            <Form method="post">
                <input
                    onChange={handleOnChange}
                    type="text"
                    name="_setValue"
                    value={value}
                    placeholder="Enter a value here"
                />
                <button type="submit">Set Value</button>
            </Form>
        </div>
    );
}
