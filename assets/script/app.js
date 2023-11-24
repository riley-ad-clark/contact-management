"use strict";

import { Contact } from "./Contact.js";
import { validateEmail, validateContactInfo } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  const contactsGrid = document.querySelector(".contacts-grid");
  const contactCount = document.querySelector(".contact-count p");
  const addContactButton = document.querySelector(".contact-form button");

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
      alert(
        "Invalid contact information. Please provide a valid Name, City, and Email separated by commas."
      );
      return;
    }

    const newContact = new Contact(name, city, email, onDeleteContact);
    contacts.unshift(newContact);
    listContacts();
  }

  function onDeleteContact(contact) {
    const index = contacts.indexOf(contact);
    if (index !== -1) {
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
