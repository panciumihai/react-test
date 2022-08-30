export const getContactsWithEvenId = (contacts) => {
  return contacts.filter((contact) => contact.id % 2 === 0);
};
