import selector from '../page/login/login.selector';

const verifyPageLoaded = () => {
  cy.get(selector.LOGO).should('exist');
};

const verifyTextSignUp = () => {
  cy.get(selector.TXT_SIGNUP)
    .should('exist')
    .and('have.text', 'New User Signup!');
};

const verifyForm = () => {
  cy.get(selector.TITLE_FORM)
    .should('exist')
    .and('have.text', 'Enter Account Information');
};

export default {
  verifyPageLoaded,
  verifyTextSignUp,
  verifyForm,
};
