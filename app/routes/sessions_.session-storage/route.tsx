import { json, LoaderFunctionArgs } from '@remix-run/node';
import { commitSessionStorage, getSessionStorage } from './session-storage.server';
import { Form, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

export const action = async ({ request }: LoaderFunctionArgs) => {
    const infoFromInput = await request.formData();
    const value = infoFromInput.get('_setValue');
    if (!value) {
        return json({ error: 'No value provided' }, { status: 400 });
    }

    const sessionStorage = await getSessionStorage(request.headers.get('Cookie'));
    sessionStorage.set('value', value);

    return json(
        { value: sessionStorage.get('value') },
        {
            headers: {
                'Set-Cookie': await commitSessionStorage(sessionStorage),
            },
        }
    );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cookieHeader = request.headers.get('Cookie');
    const sessionStorage = await getSessionStorage(cookieHeader);
    const currentValue =
        sessionStorage.get('value') || 'Please enter a value to be stored in the session storage';

    return currentValue;
};

export default function SessionStorage() {
    const currentValue = useLoaderData<typeof loader>();
    const [value, setValue] = useState('');

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value);
    }

    return (
        <div>
            <h1>Session Storage!</h1>
            <p>The current value is: {currentValue}</p>
            <Form method="post">
                <input
                    onChange={handleOnChange}
                    type="text"
                    value={value}
                    name="_setValue"
                    placeholder="Enter a value here"
                />
                <button type="submit">Set Value</button>
            </Form>
        </div>
    );
}
