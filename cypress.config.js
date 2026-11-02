const { defineConfig } = require("cypress");
const reporter = require("cypress-mochawesome-reporter/plugin");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    video: true,
    screenshotOnRunFailure: true,
    retries: { runMode: 1, openMode: 0 },
    setupNodeEvents(on, config) { reporter(on); return config; }
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports", charts: true, embeddedScreenshots: true,
    inlineAssets: true, saveAllAttempts: false,
    reportPageTitle: "Automation Exercise - Relatorio E2E",
    overwrite: false, html: true, json: true
  }
});