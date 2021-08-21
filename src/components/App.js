import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useLocalStorage('filter', '');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const handleAddContact = contact => {
    setContacts(prevState => {
      return [contact, ...prevState];
    });
  };

  const handleDeleteContact = e => {
    const { id } = e.target;

    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const handleCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert('Contact is already exist!');

    return !isExistContact;
  };

  const handleFilterChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return filteredContacts;
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm
          onAdd={handleAddContact}
          onCheckContact={handleCheckUniqueContact}
        />
      </Section>

      <Section title={'Contacts'}>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </>
  );
}
