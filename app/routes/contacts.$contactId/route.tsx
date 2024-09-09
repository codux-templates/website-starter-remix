import { Form, useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { createBasicContact, getAllContacts, getContactsName, isContactExist } from 'app/data';
import { redirect } from '@remix-run/node';

/**
 * This file have the redirect function from remix-run/node,
 * that we do not support.
 */

export const action = () => {
    const contact = createBasicContact();
    return redirect(`/contacts/${contact.id}`); // ---------------------------> problematic
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const contactId = Number(params.contactId);

    if (!contactId || !isContactExist(contactId)) {
        throw new Response('Not Found', { status: 404 });
    }

    return {
        contactId,
        contactName: getContactsName(contactId),
        contacts: getAllContacts(),
    };
};

export default function Contact() {
    const { contactName } = useLoaderData<typeof loader>();

    return (
        <div id="contact">
            <div>
                <div>The contact is: {contactName}</div>
                <div>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
