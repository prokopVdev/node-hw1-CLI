const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    console.log(JSON.parse(contacts));
    return JSON.parse(contacts);
  } catch (error) {
    console.error(error);
  }
}

async function updateContacts(contacts) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  console.log(result);
  return result || null;
}

async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  updateContacts(contacts);
  console.log(result);
  return result;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = { id: String(contacts.length + 1), name, email, phone };
  contacts.push(newContact);
  updateContacts(contacts);
  console.log(newContact);
  return newContact;
}

module.exports = {
  listContacts,
  updateContacts,
  getContactById,
  removeContact,
  addContact,
};
