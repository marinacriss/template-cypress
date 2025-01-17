const userCredentials = require('../../fixtures/user-credentials.json');

describe('API Tests', () => {
  after(() => {
    cy.CountDeleted();
  });

  it('Register User Account', () => {
    cy.createNewCount().then((response) => {
      const parsedBody = JSON.parse(response.body);
      expect(parsedBody.responseCode).to.equal(201);
      expect(parsedBody.message).to.eq('User created!');
    });
  });

  it('verify login with valid details', () => {
    cy.verifyLogin().then((response) => {
      const parsedBody = JSON.parse(response.body);
      expect(parsedBody.responseCode).to.equal(200);
      expect(parsedBody.message).to.equal('User exists!');
    });
  });
});
