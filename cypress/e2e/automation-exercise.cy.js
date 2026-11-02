import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Automation Exercise - TC01, TC02, TC03, TC04, TC05, TC08, TC09, TC10, TC15 e TC16", () => {
  let user;
  let payment;
  let email;

  beforeEach(() => {
    cy.fixture("user").then((data) => { user = data; });
    cy.fixture("payment").then((data) => { payment = data; });
    email = `cypress.qa.${Date.now()}.${Cypress._.random(1000, 9999)}@example.com`;
  });

  it("TC01 - Registrar um novo usuario", () => {
    const home = new HomePage(); const account = new AccountPage();
    home.visit(); home.assertHomeVisible();
    cy.registerNewUser(user, email);
    account.deleteAccount();
  });

  it("TC02 - Login com email e senha corretos", () => {
    const home = new HomePage(); const account = new AccountPage();
    home.visit(); cy.registerNewUser(user, email);
    account.logout(); cy.loginWith(email, user.password);
    account.assertLoggedIn(user.name); account.deleteAccount();
  });

  it("TC03 - Login com email e senha incorretos", () => {
    const home = new HomePage(); const account = new AccountPage();
    home.visit(); account.openSignupLogin();
    account.login("usuario.inexistente@example.com", "senha-incorreta");
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });

  it("TC04 - Logout do usuario", () => {
    const home = new HomePage(); const account = new AccountPage();
    home.visit(); cy.registerNewUser(user, email);
    account.logout();
    cy.url().should("include", "/login");
    cy.get('[data-qa="login-email"]').should("be.visible");
  });

  it("TC05 - Tentar registrar usuario com email ja cadastrado", () => {
    const home = new HomePage(); const account = new AccountPage();
    home.visit(); cy.registerNewUser(user, email);
    account.logout(); account.openSignupLogin();
    account.signup(user.name, email);
    cy.contains("Email Address already exist!").should("be.visible");
  });

  it("TC08 - Verificar lista de produtos e detalhes do produto", () => {
    const home = new HomePage(); const products = new ProductsPage();
    home.visit(); home.openProducts(); products.assertProductList();
    products.openFirstProduct(); products.assertProductDetails();
  });

  it("TC09 - Pesquisar produtos", () => {
    const home = new HomePage(); const products = new ProductsPage();
    home.visit(); home.openProducts(); products.search("top");
    products.assertSearchResults();
  });

  it("TC10 - Verificar assinatura na pagina inicial", () => {
    const home = new HomePage(); home.visit();
    home.subscribe(`subscription.${Date.now()}@example.com`);
    cy.contains(".alert-success", "You have been successfully subscribed!").should("be.visible");
  });

  it("TC15 - Fazer pedido registrando usuario antes do checkout", () => {
    const home = new HomePage(); const products = new ProductsPage(); const cart = new CheckoutPage();
    home.visit(); cy.registerNewUser(user, email);
    home.openProducts(); products.addFirstProductToCart();
    cart.openCart(); cart.proceedToCheckout(); cart.assertAddressAndOrder();
    cart.placeOrderAndPay(payment); new AccountPage().deleteAccount();
  });

  it("TC16 - Fazer pedido com login antes do checkout", () => {
    const home = new HomePage(); const account = new AccountPage();
    const products = new ProductsPage(); const cart = new CheckoutPage();
    home.visit(); cy.registerNewUser(user, email);
    account.logout(); cy.loginWith(email, user.password); account.assertLoggedIn(user.name);
    home.openProducts(); products.addFirstProductToCart();
    cart.openCart(); cart.proceedToCheckout(); cart.assertAddressAndOrder();
    cart.placeOrderAndPay(payment); account.deleteAccount();
  });
});