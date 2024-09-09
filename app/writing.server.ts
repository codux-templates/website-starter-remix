import {
    createReadableStreamFromReadable,
    writeAsyncIterableToWritable,
    writeReadableStreamToWritable,
} from '@remix-run/node';
import { Readable, Writable } from 'stream'; // -----------------------------------------------> Cannot handle this import also
import { WroteSomethingType } from './routes/writing/route';

// Async generator yielding chunks of data
async function* asyncGenerator(): AsyncIterable<Uint8Array> {
    yield new TextEncoder().encode('Hello, ');
    yield new TextEncoder().encode('world!');
}

export const writeAsyncIterableToWritableWrapper = async (wroteSomething: WroteSomethingType) => {
    // Create a writable stream that logs output
    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            wroteSomething.first += chunk.toString();
            callback();
        },
    });

    // Write the async iterable data to the writable stream
    await writeAsyncIterableToWritable(asyncGenerator(), writableStream); // problematic
    return wroteSomething;
};

export const writeReadableStreamToWritableWrapper = async (wroteSomething: WroteSomethingType) => {
    // Create a Node.js readable stream
    const readableStream = createReadableStreamFromReadable(Readable.from('Another oneeee')); // another problematic but its read and not write

    // Create a writable stream that logs output
    const writableStreamAnother = new Writable({
        write(chunk, encoding, callback) {
            wroteSomething.second += chunk.toString();
            callback();
        },
    });

    // Write the readable stream to the writable stream
    await writeReadableStreamToWritable(readableStream, writableStreamAnother); // problematic
    return wroteSomething;
};
