import React, { Component } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
// import ContactList from './components/ContactList';

class App extends Component {
  // state = {
  //   contacts: [],
  // };

  //   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);

  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }

  //   componentDidUpdate(prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  // handleAddContact = ({ id, name, number }) => {
  //   const contact = {
  //     id,
  //     name,
  //     number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

  //   handleDeleteContact = e => {
  //     const { id } = e.currentTarget;

  //     this.setState(prevState => ({
  //       contacts: prevState.contacts.filter(contact => contact.id !== id),
  //     }));
  //   };

  // handleCheckUniqueContact = ({ name }) => {
  //   const { contacts } = this.state;

  //   const isExistContact = !!contacts.find(contact => contact.name === name);

  //   isExistContact && alert('Contact is already exist!');

  //   return !isExistContact;
  // };

  //   getFilteredContacts = () => {
  //     const { filter, contacts } = this.state;
  //     const normalizedFilter = filter.toLowerCase();

  //     const filteredContacts = contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );

  //     return filteredContacts;
  //   };

  render() {
    // console.log(this.state.contacts);
    // const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm
          // onAdd={this.handleAddContact}
          //  onCheckContact={this.handleCheckUniqueContact}
          />
        </Section>

        <Section title={'Contacts'}>
          <Filter />
          {/* <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          /> */}
        </Section>
      </>
    );
  }
}

export default App;
