"use strict";

import { Contact } from "./Contact.js";
import { validateEmail, validateContactInfo } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  const contactsGrid = document.querySelector(".contacts-grid");
  const contactCount = document.querySelector(".contact-count");
  const addContactButton = document.querySelector(".contact-form button");
  const input = document.querySelector('input');

  input.style.border = '2px solid transparent';
  contactCount.style.border = '2px solid transparent' ;

  const contacts = [];

  function listContacts() {
    contactsGrid.innerHTML = "";
    contacts.forEach((contact, i) => {
      const contactDiv = contact.render();

      contactsGrid.appendChild(contactDiv);
    });

    contactCount.textContent = `Saved Contacts: ${contacts.length}`;
  }

  function addContact(contactInfo) {
    console.log("Add Contact called with:", contactInfo);
    const [name, city, email] = contactInfo
      .split(",")
      .map((info) => info.trim());

      if (!(validateContactInfo(contactInfo) && validateEmail(email))) {
        input.style.border = '2px solid var(--col-error-red)';
        input.style.transition = '0.3s ease-in-out'
        setTimeout(() => {
          input.style.border = '2px solid transparent';
          input.style.transition = '0.3s ease-in-out'
        }, 500);
    
        return;
      } else {
          input.style.border = '2px solid var(--col-confirm-green)';
          input.style.transition = '0.3s ease-in-out'
          setTimeout(() => {
          input.style.border = '2px solid transparent';
          input.style.transition = '0.3s ease-in-out'
          }, 500);
          contactCount.style.border = '2px solid var(--col-confirm-green)'
          contactCount.style.transition = '0.3s ease-in-out'
          setTimeout(() => {
            contactCount.style.border = '2px solid transparent';
            contactCount.style.transition = '0.3s ease-in-out'
          }, 500);
          const newContact = new Contact(name, city, email, onDeleteContact);
          contacts.unshift(newContact);
          listContacts();
      }
  }

  function onDeleteContact(contact) {
    const index = contacts.indexOf(contact);
    if (index !== -1) {
      contactCount.style.border = '2px solid var(--col-error-red)'
      contactCount.style.transition = '0.3s ease-in-out'
      setTimeout(() => {
          contactCount.style.border = '2px solid transparent';
          contactCount.style.transition = '0.3s ease-in-out'
      }, 500);
      contacts.splice(index, 1);
      listContacts();
    }
  }

  addContactButton.addEventListener("click", () => {
    const contactInfo = contactForm.querySelector(".contact-info").value;
    addContact(contactInfo);
    contactForm.reset();
  });

  listContacts();
});
