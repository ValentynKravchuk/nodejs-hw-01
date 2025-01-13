import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    for (let index = 0; index < number; index++) {
      newContacts.push(createFakeContact());
    }
    await writeContacts([...contacts, ...newContacts]);
    console.log(`${number} Contacts generated successfully.`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
