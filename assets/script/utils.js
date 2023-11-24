'use strict';

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactInfo(contactInfo) {
    // Splits at commas (,)
    const contactInfoArray = contactInfo.split(',').map((info) => info.trim());

    // Checks for 3 inputs
    if (!(contactInfoArray.length >= 3)) {
      return false;
    }
  
    const [name, city, email] = contactInfoArray;
  
    // Checks for empty fields
    if (name.length === 0 || city.length === 0 || email.length === 0) {
      return false;
    }

    // Call validateEmail()
    validateEmail(email)
  }
export { validateEmail, validateContactInfo };