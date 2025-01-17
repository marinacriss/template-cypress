const shouldContainText = (element, text) => {
  return cy.get(element).should('contain', text);
};

export default {
  shouldContainText,
};
