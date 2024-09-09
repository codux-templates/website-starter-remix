import React from 'react';
import { readableStreamToString, createReadableStreamFromReadable } from "@remix-run/node";
import { Readable } from "stream"; // -----------------------------------------------> Cannot handle this import also
import { useLoaderData } from '@remix-run/react';

/**
 * This file have 2 examples of read functions of some kind from remix-run/node-
 * createReadableStreamFromReadable, readableStreamToString
 * that we do not support.
 */

export async function loader() {
  // Create a Node.js readable stream
  const nodeStream = Readable.from("Stream data");

  // Convert the stream to a web-compatible ReadableStream
  const readableStream = createReadableStreamFromReadable(nodeStream); // ------------> first

  // Convert the readable stream to a string
  const streamString = await readableStreamToString(readableStream); // --------------> second

  return new Response(`Stream as string: ${streamString}`);
}

export default function Reading() {
    const { something } = useLoaderData<typeof loader>();

    return <div>{something}</div>;
}
