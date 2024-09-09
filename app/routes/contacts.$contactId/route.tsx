import { Form, useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import {
    createBasicContact,
    getAllContacts,
    getContactsCount,
    getContactsName,
    isContactExist,
} from 'app/data';
import { redirect } from '@remix-run/node';

/**
 * This file have the redirect function from remix-run/node,
 * that we do not support.
 */

export const action = async ({ request, params }: LoaderFunctionArgs) => {
    const fromInput = await request.formData();
    const currentContactId = Number(params.contactId);

    if (fromInput.get('New')) {
        const contact = createBasicContact();
        return redirect(`/contacts/${contact.id}`); // ---------------------------> problematic
    } else if (fromInput.get('Former contact')) {
        return redirect(`/contacts/${currentContactId - 1}`); // ---------------------------> problematic
    } else if (fromInput.get('Next contact')) {
        return redirect(`/contacts/${currentContactId + 1}`); // ---------------------------> problematic
    } else {
        // throw an error if the submit button is not recognized
        return new Response('Bad Request, this button is not recognized', { status: 400 });
    }
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const contactId = Number(params.contactId);

    if (!isContactExist(contactId)) {
        throw new Response('Not Found', { status: 404 });
    }

    return {
        contactId,
        contactName: getContactsName(contactId),
        contacts: getAllContacts(),
        contactsCount: getContactsCount(),
    };
};

export default function Contact() {
    const { contactName, contactId, contactsCount } = useLoaderData<typeof loader>();

    return (
        <div id="contact">
            <div>
                <div>The contact is: {contactName}</div>
                <div>
                    {contactId > 0 && (
                        <Form method="post">
                            <button type="submit" name="Former contact" value="Former contact">
                                Former contact
                            </button>
                        </Form>
                    )}
                    {contactId < contactsCount - 1 && (
                        <Form method="post">
                            <button type="submit" name="Next contact" value="Next contact">
                                Next contact
                            </button>
                        </Form>
                    )}
                    <Form method="post">
                        <button type="submit" name="New" value="New">
                            New
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
