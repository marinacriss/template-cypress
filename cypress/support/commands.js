import loginPage from '../e2e/login/page/login/login.page';
import loginValidation from '../e2e/login/validation/login.validation';
import formPage from '../e2e/form/page/form.page';
import formValidation from '../e2e/form/validations/form.validation';
import './requests';

Cypress.Commands.add('login', () => {
  loginPage.open();
  loginValidation.verifyPageLoaded();
  loginPage.clickSignLogin();
  loginPage.enterSignUpDetails();
});

Cypress.Commands.add('form', () => {
  cy.login();
  formPage.fillAccountInformation();
  formPage.selectCheckBoxes();
  formPage.fillAdressInformation();
  formValidation.verifyTextCount();
});
