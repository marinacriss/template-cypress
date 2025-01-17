import formPage from '../page/form.page';
import formValidation from '../validations/form.validation';

describe('Register new user', () => {
  beforeEach(() => {
    cy.login();
  });
  it('Fill form @form', () => {
    //Preenchimento do formulário
    formPage.fillAccountInformation();

    //Selecione os checkboxes
    formPage.selectCheckBoxes();

    //   //Preencher os detalhes: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    formPage.fillAdressInformation();

    // //Verifique se o campo 'ACCOUNT CREATED!' está visível.
    formValidation.verifyTextCount();
  });
});
