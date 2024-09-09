interface Contact {
    [key: number]: string;
}

export const contacts: Contact = {
    0: 'noam',
    1: 'dor',
    2: 'matan',
    3: 'daniel',
};

export const createBasicContact = () => {
    const shimon = 'Shimon';
    //add new contact to the contacts list
    contacts[Object.keys(contacts).length] = shimon;
    return { id: Object.keys(contacts).length - 1, name: shimon };
};

export const isContactExist = (contactsId: number) => {
    return contactsId in contacts;
};

export const getContactsName = (contactsId: number) => {
    if (!isContactExist(contactsId)) {
        return `this name does not exist, why didn't you check existence first??`;
    }
    return contacts[contactsId];
};

export const getAllContacts = () => {
    return contacts;
};

export const getContactId = (contactName: string) => {
    for (const [key, value] of Object.entries(contacts)) {
        if (value === contactName) {
            return key;
        }
    }
    return -1;
};

export const getContactsCount = () => {
    return Object.keys(contacts).length;
};
