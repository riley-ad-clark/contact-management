"use strict";

class Contact {
  constructor(name, city, email, onDelete) {
    this._name = name;
    this._city = city;
    this._email = email;
    this._onDelete = onDelete;
  }

  get name() {
    return this._name;
  }

  get city() {
    return this._city;
  }

  get email() {
    return this._email;
  }

  render() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-grid", "contact-item");
    contactDiv.innerHTML = `
            <div class="contact-box">
                <p>Name: ${this.name}</p>
                <p>City: ${this.city}</p>
                <p>Email: ${this.email}</p>
            </div>
        `;
    contactDiv.addEventListener("click", () => {
      if (this._onDelete) {
        this._onDelete(this);
      }
    });

    return contactDiv;
  }
}

export { Contact };
