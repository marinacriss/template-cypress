import selector from '../page/conclusion.selector';

//Verifique se o botão 'Logged in as username' está visível.
const validateUserName = () => {
  cy.get(selector.USERNAME).should('exist');
};

//Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
const validateSucessDeleted = () => {
  cy.get(selector.TXT_COUNT_DELETED)
    .should('exist')
    .and('have.text', 'Account Deleted!');
  cy.get(selector.BTT_CONTINUE).click();
};

export default {
  validateUserName,
  validateSucessDeleted,
};
