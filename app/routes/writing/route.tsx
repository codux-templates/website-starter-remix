import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import {
    writeAsyncIterableToWritableWrapper,
    writeReadableStreamToWritableWrapper,
} from 'app/writing';

/**
 * This file have 2 examples of write functions of some kind from remix-run/node-
 * writeAsyncIterableToWritable, writeReadableStreamToWritable
 * that we do not support.
 */

export interface WroteSomethingType {
    first: string;
    second: string;
}

let wroteSomethingTemplate: WroteSomethingType = {
    first: '',
    second: '',
};

export const action = async ({ request }: LoaderFunctionArgs) => {
    const wantedAction = await request.formData();

    if (wantedAction.get('writeAsyncIterableToWritable')) {
        wroteSomethingTemplate = await writeAsyncIterableToWritableWrapper(wroteSomethingTemplate);
    } else {
        wroteSomethingTemplate = await writeReadableStreamToWritableWrapper(wroteSomethingTemplate);
    }
    return wroteSomethingTemplate;
};

export default function Writing() {
    const wroteSomething = useActionData<typeof action>();

    return (
        <div>
            <p>This file have 2 examples of write functions of some kind from remix-run/node:</p>
            <br />
            <ul>
                <li>writeAsyncIterableToWritable</li>
                <li>writeReadableStreamToWritable</li>
            </ul>
            <br />
            <p>that we do not support.</p>
            <br />
            <br />
            <div>
                <Form method="post">
                    <button
                        type="submit"
                        name="writeAsyncIterableToWritable"
                        value="writeAsyncIterableToWritable"
                    >
                        Write async iterable to writable stream
                    </button>
                </Form>
                <p>we wrote this: {wroteSomething?.first}</p>
            </div>
            <div>
                <Form method="post">
                    <button
                        type="submit"
                        name="writeReadableStreamToWritable"
                        value="writeReadableStreamToWritable"
                    >
                        Write readable stream to writable stream
                    </button>
                </Form>
                <p>we wrote this: {wroteSomething?.second}</p>
            </div>
        </div>
    );
}
