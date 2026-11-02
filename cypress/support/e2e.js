import "./commands";
import "cypress-mochawesome-reporter/register";
Cypress.on("uncaught:exception", (err) => {
  if (/ResizeObserver loop|Script error/i.test(err.message)) return false;
});