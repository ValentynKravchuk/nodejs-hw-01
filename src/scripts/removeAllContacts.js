import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
