import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    const updatedContacts = allContacts.slice(0, allContacts.length - 1);
    await writeContacts(updatedContacts);
    console.log('Last contact removed successfully.');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
