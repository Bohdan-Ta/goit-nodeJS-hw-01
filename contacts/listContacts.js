const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const listContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(contactsPath));
  return contacts;
};

module.exports = listContacts;
