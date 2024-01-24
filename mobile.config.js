const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 2,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    pageLoadTimeout: 60000,
    viewportWidth: 375,
    viewportHeight: 812,
  },
});
