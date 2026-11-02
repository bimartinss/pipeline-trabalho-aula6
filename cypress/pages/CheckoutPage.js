class CheckoutPage {
  openCart() { cy.contains("a", "Cart").click(); cy.url().should("include", "/view_cart"); }
  proceedToCheckout() { cy.contains("Proceed To Checkout").click(); }
  assertAddressAndOrder() {
    cy.get("#address_delivery").should("be.visible");
    cy.get("#cart_info").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");
  }
  placeOrderAndPay(payment) {
    cy.get('[name="message"]').type("Pedido de teste automatizado Cypress");
    cy.contains("Place Order").click();
    cy.get('[data-qa="name-on-card"]').type(payment.nameOnCard);
    cy.get('[data-qa="card-number"]').type(payment.cardNumber);
    cy.get('[data-qa="cvc"]').type(payment.cvc);
    cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(payment.expiryYear);
    cy.get('[data-qa="pay-button"]').click();
    cy.contains("Order Placed!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }
}
export default CheckoutPage;