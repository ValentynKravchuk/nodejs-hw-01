import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const showAllContacts = async () => {
  const contacts = await getAllContacts();
  console.log('All contacts:', contacts);
};

showAllContacts();
