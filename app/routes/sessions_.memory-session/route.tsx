import { json, LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { commitMemorySession, getMemorySession } from './memory-sessions.server';
import { useState } from 'react';

export const action = async ({ request }: LoaderFunctionArgs) => {
    const infoFromInput = await request.formData();
    const value = infoFromInput.get('_setValue');
    if (!value) {
        return json({ error: 'No value provided' }, { status: 400 });
    }

    const headers = request.headers.get('Cookie');
    const session = await getMemorySession(headers);
    session.set('value', value);

    return json(
        { value: session.get('value') },
        {
            headers: {
                'Set-Cookie': await commitMemorySession(session),
            },
        }
    );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const headers = request.headers.get('Cookie');
    const session = await getMemorySession(headers);
    const currentValue =
        session.get('value') || 'Please enter a value to be stored in the memory session';

    return currentValue;
};

export default function MemorySession() {
    const currentValue = useLoaderData<typeof loader>();
    const [value, setValue] = useState('');

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value);
    }

    return (
        <div>
            <h1>Memory session woohooooo</h1>
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
