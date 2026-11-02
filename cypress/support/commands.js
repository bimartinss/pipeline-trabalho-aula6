import AccountPage from "../pages/AccountPage";
Cypress.Commands.add("registerNewUser", (user, email) => {
  const account = new AccountPage();
  account.openSignupLogin();
  account.signup(user.name, email);
  cy.contains("h2", "Enter Account Information").should("be.visible");
  account.fillRegistration(user);
  cy.contains("b", "Account Created!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
  account.assertLoggedIn(user.name);
});
Cypress.Commands.add("loginWith", (email, password) => {
  const account = new AccountPage();
  account.openSignupLogin();
  account.login(email, password);
});