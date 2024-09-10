import { defer } from '@remix-run/server-runtime';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';

// Simulate an API call with some delay
const fetchDelayedData = () =>
    new Promise<string>((resolve) =>
        setTimeout(() => resolve('This data was loaded with a delay!'), 3000)
    );

// Loader function using `defer`
export const loader = async () => {
    const immediateData = 'This is immediate data.';
    const delayedDataPromise = fetchDelayedData();

    return defer({
        immediateData,
        delayedData: delayedDataPromise,
    });
};

// Component that uses the loader data
export default function Defering() {
    const { immediateData, delayedData } = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>Using `defer` in Remix</h1>

            <p>{immediateData}</p>

            <Suspense fallback={<p>Loading delayed data...</p>}>
                <Await resolve={delayedData}>{(loadedData) => <p>{loadedData}</p>}</Await>
            </Suspense>
        </div>
    );
}
