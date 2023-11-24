'use strict';

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactInfo(contactInfo) {
    const contactInfoArray = contactInfo.split(',').map((info) => info.trim());
    return contactInfoArray.length === 3 && contactInfoArray.every((info) => info.length > 0);
}

export { validateEmail, validateContactInfo };