import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { commitSession, getSession } from './file-session-storage.server'; // ------------------> first

/**
 * This file have 5 examples of session functions of some kind from remix-run/node-
 * createFileSessionStorage, createCookie, createCookieSessionStorage, createMemorySessionStorage, createSessionStorage,
 * that we do not support.
 */

// Create a cookie
// const myCookie = createCookie('myCookieName', { maxAge: 3600 }); // --------------------------> second

// create cookie session storage
// const cookieSessionStorage = createCookieSessionStorage({
//     // ---------------------------------> third
//     cookie: {
//         name: '__session',
//         secrets: ['another-secret'],
//         sameSite: 'lax',
//         path: '/',
//         httpOnly: true,
//     },
// });

// Create memory-based session storage
// const memorySessionStorage = createMemorySessionStorage({
//     // ------------------------------------> forth
//     cookie: {
//         name: '__session',
//         secrets: ['yet-another-secret'],
//         sameSite: 'lax',
//         path: '/',
//         httpOnly: true,
//     },
// });

// Create custom session storage (for example, store in memory)
// const sessionStorage = createSessionStorage({
//     // -------------------------------------------------> fifth
//     cookie: {
//         name: '__session',
//         secrets: ['custom-secret'],
//         sameSite: 'lax',
//         path: '/',
//         httpOnly: true,
//     },
//     async createData(data) {
//         // Custom storage logic for creating session data
//         return JSON.stringify(data);
//     },
//     async readData(id) {
//         // Custom logic for reading session data
//         return JSON.parse(id);
//     },
//     async updateData(id, data) {
//         // Custom logic for updating session data
//     },
//     async deleteData(id) {
//         // Custom logic for deleting session data
//     },
// });

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cookieHeader = request.headers.get('Cookie');
    const session = await getSession(cookieHeader);

    const currentValue = session.get('value') || 'No value yet';

    return json({ currentValue });
};

export const action = async ({ request }: LoaderFunctionArgs) => {
    const fromInput = await request.formData();
    const inputValue = fromInput.get('_setValue');
    if (!inputValue) {
        return json({ error: 'No value provided' }, { status: 400 });
    }

    const session = await getSession(request.headers.get('Cookie'));
    session.set('value', inputValue);

    return json(
        { value: session.get('value') },
        {
            headers: {
                'Set-Cookie': await commitSession(session),
            },
        }
    );
};

export default function CookiePage() {
    const { currentValue } = useLoaderData<typeof loader>();
    const [value, setValue] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <h2>Current Value: {currentValue}</h2>
            <Form method="post">
                <input onChange={handleOnChange} type="text" name="_setValue" value={value} />
                <button type="submit">Set Value</button>
            </Form>
        </div>
    );
}
