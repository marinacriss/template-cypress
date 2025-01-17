import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      login_url: '/login',
      products_url: '/products',
      EMAIL: 'marina@teste.com.br',
    },
  },
});
