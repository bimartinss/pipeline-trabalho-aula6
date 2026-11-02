# Automation Exercise - Testes E2E com Cypress

Projeto de automacao web para os casos **1, 2, 3, 4, 5, 8, 9, 10, 15 e 16** da pagina [Test Cases](https://automationexercise.com/test_cases).

## Tecnologias
- Cypress 13 + JavaScript
- Page Object Model (POM)
- Fixtures para dados de teste
- GitHub Actions para CI
- Mochawesome para relatorios HTML/JSON

## Casos automatizados

| Caso | Cenario |
|---|---|
| TC01 | Registrar um novo usuario |
| TC02 | Login com email e senha corretos |
| TC03 | Login com email e senha incorretos |
| TC04 | Logout do usuario |
| TC05 | Tentar registrar usuario com email ja cadastrado |
| TC08 | Verificar lista de produtos e detalhes |
| TC09 | Pesquisar produtos |
| TC10 | Verificar assinatura na pagina inicial |
| TC15 | Fazer pedido registrando antes do checkout |
| TC16 | Fazer pedido com login antes do checkout |

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

## Execucao local
Requisitos: Node.js 20+.
```bash
npm install
npx cypress open
```
Execucao headless: `npm run cy:run`.

O relatorio Mochawesome, screenshots e videos ficam em `cypress/reports`, `cypress/screenshots` e `cypress/videos`.

## GitHub Actions
O workflow `.github/workflows/cypress.yml` roda em push para a branch de trabalho, em pull requests para main/master e manualmente. Instala dependencias, executa Cypress em Chrome headless e publica relatorios/evidencias como artefato por 14 dias, inclusive em falhas.

## Padroes e boas praticas
- POM separa interacoes das paginas e cenarios.
- Fixtures mantem dados de teste fora dos specs.
- Comando customizado `registerNewUser` reduz duplicacao.
- Email dinamico evita conflitos entre execucoes.
- Preferencia por seletores estaveis `data-qa`, IDs e classes semanticas.
- Casos identificados com os mesmos numeros do roteiro.
- `node_modules` e artefatos gerados estao no .gitignore.

## Observacao
A aplicacao e um site publico de terceiros; disponibilidade e conteudo podem variar. O checkout depende da disponibilidade do fluxo demonstrativo de pagamento do ambiente.
