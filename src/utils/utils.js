export const getContactsWithEvenId = (contacts) => {
  return contacts.filter((contact) => contact.id % 2 === 0);
};

export const getContactName = (contact) => {
  return contact.first_name || contact.last_name
    ? `${contact.first_name} ${contact.last_name}`
    : '-';
};
