class HomePage {
  visit() { cy.visit("/"); cy.get("body").should("be.visible"); }
  openSignupLogin() { cy.contains("a", "Signup / Login").click(); }
  openProducts() { cy.contains("a", "Products").click(); }
  subscribe(email) {
    cy.get("#susbscribe_email").scrollIntoView().should("be.visible").type(email);
    cy.get("#subscribe").click();
  }
  assertHomeVisible() {
    cy.get("body").should("contain.text", "Full-Fledged practice website for Automation Engineers");
  }
}
export default HomePage;