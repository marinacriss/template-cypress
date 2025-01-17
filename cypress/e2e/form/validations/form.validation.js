import selector from '../page/form.selector';

const verifyTextCount = () => {
  cy.get(selector.TXT_COUNT)
    .should('exist')
    .and('have.text', 'Account Created!');
};

export default {
  verifyTextCount,
};
