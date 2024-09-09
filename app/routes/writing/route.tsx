import {
    createReadableStreamFromReadable,
    writeAsyncIterableToWritable,
    writeReadableStreamToWritable,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Readable, Writable } from 'stream'; // -----------------------------------------------> Cannot handle this import also

/**
 * This file have 2 examples of write functions of some kind from remix-run/node-
 * writeAsyncIterableToWritable, writeReadableStreamToWritable
 * that we do not support.
 */

export async function loader() {
    // Async generator yielding chunks of data
    async function* asyncGenerator(): AsyncIterable<Uint8Array> {
        yield new TextEncoder().encode('Hello, ');
        yield new TextEncoder().encode('world!');
    }

    // Create a writable stream that logs output
    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        },
    });

    // Write the async iterable data to the writable stream
    await writeAsyncIterableToWritable(asyncGenerator(), writableStream); // --------> first

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Create a Node.js readable stream
    const readableStream = createReadableStreamFromReadable(Readable.from('Stream data')); // another problematic but its read and not write

    // Create a writable stream that logs output
    const writableStreamAnother = new Writable({
        write(chunk, encoding, callback) {
            console.log('Writable received:', chunk.toString());
            callback();
        },
    });

    // Write the readable stream to the writable stream
    await writeReadableStreamToWritable(readableStream, writableStreamAnother); // -------> second

    return new Response('Data written to the writable stream');
}

export default function Writing() {
    const { something } = useLoaderData<typeof loader>();

    return <div>{something}</div>;
}
