class ProductsPage {
  assertProductList() {
    cy.get(".features_items").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
  }
  openFirstProduct() {
    cy.get(".features_items .product-image-wrapper").first().within(() => {
      cy.contains("a", "View Product").click({ force: true });
    });
  }
  assertProductDetails() {
    cy.url().should("include", "/product_details/");
    cy.get(".product-information").within(() => {
      cy.get("h2").should("be.visible");
      cy.contains("Category").should("be.visible");
      cy.contains("Rs.").should("be.visible");
      cy.contains("Availability").should("be.visible");
      cy.contains("Condition").should("be.visible");
      cy.contains("Brand").should("be.visible");
    });
  }
  search(term) { cy.get("#search_product").type(term); cy.get("#submit_search").click(); }
  assertSearchResults() {
    cy.contains("h2", "Searched Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
  }
  addFirstProductToCart() {
    cy.get(".features_items .product-image-wrapper").first().within(() => {
      cy.contains("Add to cart").click({ force: true });
    });
    cy.contains("Continue Shopping").click();
  }
}
export default ProductsPage;