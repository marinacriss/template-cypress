/**
 * @type {Cypress.PluginConfig}
 */

const selectTests = require('cypress-select-tests');

const pickTests = (filename, foundTests, cypressConfig) => {
  let foundedTests = [];

  cypressConfig.env.grep.forEach((grepName) => {
    let testNames = foundTests.filter((fullTestName) =>
      fullTestName.join(' ').includes(grepName),
    );
    if (testNames) {
      foundedTests.push(...testNames);
    }
  });

  return foundedTests;
};

module.exports = (on, config) => {
  on('file:preprocessor', selectTests(config, pickTests));
};
