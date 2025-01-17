const faker = require('faker-br');
const getEnvString = require('../helpers/get-env-string');

/**
 * Gera um email aleatorio utilizando como base o email configurado no .env, adicionandoo símbolo de + e alguns números.
 */

module.exports = function validEmailGenerator() {
  let emailEnv = Cypress.env('EMAIL');
  debugger;
  let emailBreak = emailEnv.split('@');
  let email = emailBreak[0] + '+' + faker.random.number() + '@' + emailBreak[1];
  return email;
};
