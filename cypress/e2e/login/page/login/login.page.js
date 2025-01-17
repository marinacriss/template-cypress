import selector from './login.selector';
const validEmailGenerator = require('../../../../helpers/valid-email-generator');
const userCredentials = require('../../../../fixtures/user-credentials.json');

const open = () => {
  cy.visit('http://automationexercise.com');
};

const clickSignLogin = () => {
  cy.get(selector.LINK_SIGNUP).click();
};

const enterSignUpDetails = () => {
  let email = validEmailGenerator();
  cy.get(selector.LOGIN_NAME).type(userCredentials.name);
  cy.get(selector.LOGIN_MAIL).type(email);
  cy.get(selector.BTN_SIGNUP).click();
};

export default {
  open,
  clickSignLogin,
  enterSignUpDetails,
};
