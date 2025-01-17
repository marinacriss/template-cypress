const userCredentials = require('../../fixtures/user-credentials.json');

Cypress.Commands.add('CountDeleted', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://automationexercise.com/api/deleteAccount',
    failOnStatusCode: false,
    form: true,
    body: {
      email: userCredentials.email,
      password: userCredentials.password,
    },
  });
});

Cypress.Commands.add('verifyLogin', () => {
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/verifyLogin',
    failOnStatusCode: false,
    form: true,
    headers: {
      ContentType: 'application/json',
    },
    body: {
      email: userCredentials.email,
      password: userCredentials.password,
    },
  });
});

Cypress.Commands.add('createNewCount', () => {
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    failOnStatusCode: false,
    form: true,
    body: {
      name: userCredentials.name,
      email: userCredentials.email,
      password: userCredentials.password,

      title: userCredentials.title,
      birth_date: userCredentials.days,
      birth_month: userCredentials.months,
      birth_year: userCredentials.years,

      firstname: userCredentials.firstName,
      lastname: userCredentials.lastName,

      company: userCredentials.company,
      address1: userCredentials.address,
      address2: userCredentials.address,

      country: userCredentials.country,
      zipcode: userCredentials.zipcode,
      state: userCredentials.state,
      city: userCredentials.city,

      mobile_number: userCredentials.mobile,
    },
  });
});
