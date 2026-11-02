class AccountPage {
  openSignupLogin() { cy.contains("a", "Signup / Login").click(); }
  signup(name, email) {
    cy.get('[data-qa="signup-name"]').should("be.visible").type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }
  fillRegistration(user) {
    cy.get("#id_gender1").check({ force: true });
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select("10");
    cy.get('[data-qa="months"]').select("5");
    cy.get('[data-qa="years"]').select("1995");
    cy.get("#newsletter").check({ force: true });
    cy.get("#optin").check({ force: true });
    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
    cy.get('[data-qa="create-account"]').click();
  }
  login(email, password) {
    cy.get('[data-qa="login-email"]').should("be.visible").type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }
  assertLoggedIn(name) { cy.contains("a", `Logged in as ${name}`).should("be.visible"); }
  deleteAccount() {
    cy.contains("a", "Delete Account").click();
    cy.contains("h2", "Account Deleted").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }
  logout() { cy.contains("a", "Logout").click(); }
}
export default AccountPage;