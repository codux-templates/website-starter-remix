import { useLoaderData } from '@remix-run/react';
import { fetchExample } from 'app/globals.server';

/**
 * This file have installGlobals() from remix-run/node-
 * that we do not support.
 */

export async function loader() {
    const fetched = await fetchExample();
    return fetched;
}

export default function InstallGlobals() {
    const fetched = useLoaderData<typeof loader>();
    return (
        <div>
            <p>This file have installGlobals() from remix-run/node- that we do not support.</p>
            <br />
            <br />
            <h1>The fetched data is: </h1>
            <br />
            <div>{fetched.title}</div>
            <div>{fetched.body}</div>
        </div>
    );
}
