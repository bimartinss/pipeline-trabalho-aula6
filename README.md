# O Projeto

Este projeto foi criado com o objetivo de montar uma pipeline de integracao continua ; trabalho de conclusao da disciplina.

Como eu ja tinha um projeto em JavaScript de uma disciplina anterior, resolvi adaptar esse mesmo para a atividade. ELE Simula um servico simples de pagamento, com testes automatizados usando Mocha.

## Tecnologias usadas

- JavaScript
- Node.js
- Mocha
- GitHub Actions

### Estrutura do projeto

.
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── ServicoDePagamento.js
├── test/
│   └── ServicoDePagamento.test.js
├── package.json
├── .gitignore
└── README.md


#### Testes 

Os testes ficam em:
test/ServicoDePagamento.test.js


e validam o seguinte

- pagamento classificado como caro;
- pagamento classificado como padrao;
- consulta do ultimo pagamento;
- retorno `null` quando nao existe pagamento;
- erro quando o codigo de barras nao e informado;
- erro quando o valor do pagamento e invalido.


##### Pipeline no GitHub 

A pipeline foi criada no arquivo:
.github/workflows/ci.yml

executa os testes automatizados e salva os relatorios da execucao.

###### Formas de execucao da pipeline

A pipeline possui tres formas de execucao= push, manual E agendada (roda de forma agendada toda segunda as 12:00 UTC)