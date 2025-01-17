import conclusionPage from '../page/conclusion.page';
import conclusionValidation from '../validation/conclusion.validation';

describe('Register conclusion', () => {
  beforeEach(() => {
    cy.form();
  });
  it('Validate if registration was sucessfull @conclusion', () => {
    //Clique no botão 'Continue'.
    conclusionPage.clickContinue();

    //Verifique se o botão 'Logged in as username' está visível.
    conclusionValidation.validateUserName();

    //Clique no botão 'Delete Account'.
    conclusionPage.deleteCount();

    // //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    conclusionValidation.validateSucessDeleted();
  });
});
