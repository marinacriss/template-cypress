import loginPage from '../page/login/login.page';
import loginValidation from '../validation/login.validation';

describe('Check new user', () => {
  it('Validate new user @login', () => {
    // Visite a página inicial do site
    loginPage.open();

    // Verifique se o logo está visível
    loginValidation.verifyPageLoaded();

    // Clique no menu 'Signup / Login'
    loginPage.clickSignLogin();

    // Verifique se o formulário de signup está visível e tem o texto correto
    loginValidation.verifyTextSignUp();

    // Preencha o formulário de signup
    loginPage.enterSignUpDetails();

    // Verifique se o formulário de login está visível e verifica se o texto é 'Enter Account Information'
    loginValidation.verifyForm();
  });
});
