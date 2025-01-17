import selector from '../page/conclusion.selector';

const clickContinue = () => {
  cy.get(selector.BTT_CONTINUE).click();
};

const deleteCount = () => {
  cy.get(selector.DELETE).click();
};
export default {
  clickContinue,
  deleteCount,
};
