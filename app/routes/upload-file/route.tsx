import {
    json,
    unstable_parseMultipartFormData,
    unstable_createFileUploadHandler,
    type LoaderFunctionArgs,
} from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
// import path from 'path'; // -----------------------------------------------------------------------> not from remix-run/node.

/**
 * This file have 3 examples functions of some kind from remix-run/node-
 * unstable_createFileUploadHandler, unstable_parseMultipartFormData, json
 * that we do not support.
 * It also shows that we don't handle the 'path' package.
 */

// Define where uploaded files will be saved
// const uploadDir = path.join(__dirname, '../uploads');

export const action = async ({ request }: LoaderFunctionArgs) => {
    // Create a file upload handler that stores files in the 'uploads' folder
    const uploadHandler = unstable_createFileUploadHandler({
        // --------------------------------------------------------------------------------------------> first
        directory: 'uploadDir', // --------------------------------------------------------------------> change to the var uploadDir when the import of the path is fine.
        file: ({ filename }) => filename,
    });

    // Parse the incoming multipart/form-data request
    const formData = await unstable_parseMultipartFormData(request, uploadHandler); // -----------------> second

    // Get the uploaded file
    const uploadedFile = formData.get('file');

    return json({
        // -------------------------------------------------------------------------------------------> third
        success: !!uploadedFile,
        filename: uploadedFile ? uploadedFile.toString() : null,
    });
};

export default function UploadFile() {
    const actionData = useActionData<typeof action>();

    return (
        <div>
            <p>This file have 3 examples functions of some kind from remix-run/node:</p>
            <br />
            <ul>
                <li>unstable_createFileUploadHandler</li>
                <li>unstable_parseMultipartFormData</li>
                <li>json</li>
            </ul>
            <br />
            <p>that we do not support. It also shows that we dont handle the path package.</p>
            <br />
            <br />
            <h2>Upload a File</h2>
            <Form method="post" encType="multipart/form-data">
                <input type="file" name="file" />
                <button type="submit">Upload</button>
            </Form>

            {actionData?.success && <p>File uploaded successfully: {actionData.filename}</p>}
        </div>
    );
}
