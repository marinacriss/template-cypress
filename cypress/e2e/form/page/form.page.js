import selector from '../page/form.selector';
const userCredentials = require('../../../fixtures/user-credentials.json');

const fillAccountInformation = () => {
  cy.get(selector.TITLE_FORM)
    .should('exist')
    .and('have.text', 'Enter Account Information');
  cy.get(selector.TITLE).click();
  cy.get(selector.PASSWORD).type(userCredentials.password);
  cy.get(selector.BIRTH_DAY).select(userCredentials.days);
  cy.get(selector.BIRTH_MONTH).select(userCredentials.months);
  cy.get(selector.BIRTH_YEAR).select(userCredentials.years);
};

const selectCheckBoxes = () => {
  cy.get(selector.NEWSLETTER).click();
  cy.get(selector.SPECIALOFFERS).click();
};

const fillAdressInformation = () => {
  cy.get(selector.FIRST_NAME).type(userCredentials.firstName);
  cy.get(selector.LAST_NAME).type(userCredentials.lastName);
  cy.get(selector.COMPANY).type(userCredentials.company);
  cy.get(selector.ADRESS).type(userCredentials.address);
  cy.get(selector.ADRESS2).type(userCredentials.complement);
  cy.get(selector.COUNTRY).select(userCredentials.country);
  cy.get(selector.STATE).type(userCredentials.state);
  cy.get(selector.CITY).type(userCredentials.city);
  cy.get(selector.ZIPCODE).type(userCredentials.zipcode);
  cy.get(selector.MOBILENUMBER).type(userCredentials.mobile);
  cy.get(selector.BTT_CREATE_ACCOUNT).click();
};

export default {
  fillAccountInformation,
  selectCheckBoxes,
  fillAdressInformation,
};
