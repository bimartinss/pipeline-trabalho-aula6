# Automation Exercise - Testes E2E com Cypress

Projeto de automacao web para os casos **1, 2, 3, 4, 5, 8, 9, 10, 15 e 16** da pagina [Test Cases](https://automationexercise.com/test_cases).

## Tecnologias
- Cypress 13 + JavaScript
- Page Object Model (POM)
- Fixtures para dados de teste
- GitHub Actions para CI
- Mochawesome para relatorios HTML/JSON

## Casos automatizados

| TC01 - Registrar um novo usuario 
| TC02 - Login com email e senha corretos 
| TC03 - Login com email e senha incorretos 
| TC04- Logout do usuario 
| TC05 - Tentar registrar usuario com email ja cadastrado 
| TC08 - Verificar lista de produtos e detalhes 
| TC09 - Pesquisar produtos 
| TC10 - Verificar assinatura na pagina inicial 
| TC15 - Fazer pedido registrando antes do checkout 
| TC16 - Fazer pedido com login antes do checkout 

## Estrutura
```text
cypress/
  e2e/automation-exercise.cy.js
  fixtures/user.json
  fixtures/payment.json
  pages/ (HomePage, AccountPage, ProductsPage, CheckoutPage)
  support/ (commands.js, e2e.js)
.github/workflows/cypress.yml
cypress.config.js
package.json
```
