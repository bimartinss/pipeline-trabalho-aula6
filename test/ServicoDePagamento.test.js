const assert = require('node:assert')
const ServicoDePagamento = require('../src/ServicoDePagamento')

describe('ServicoDePagamento', function () {
  it('classifica como cara quando o valor e maior que 100', function () {
    const servicoDePagamento = new ServicoDePagamento()

    const pagamento = servicoDePagamento.pagar('2002-2305-2410', 'BMP', 155.85)

    assert.deepStrictEqual(pagamento, {
      codigoBarras: '2002-2305-2410',
      empresa: 'BMP',
      valor: 155.85,
      categoria: 'cara'
    })
  })

  it('classifica como padrao quando o valor e menor ou igual a 100', function () {
    const servicoDePagamento = new ServicoDePagamento()

    const pagamento = servicoDePagamento.pagar('1234-5678-9000', 'MLP', 100.0)

    assert.deepStrictEqual(pagamento, {
      codigoBarras: '1234-5678-9000',
      empresa: 'MLP',
      valor: 100.0,
      categoria: 'padrao'
    })
  })

  it('consulta o ultimo pagamento realizado', function () {
    const servicoDePagamento = new ServicoDePagamento()

    servicoDePagamento.pagar('1111-2222-3333', 'Empresa A', 50.0)
    servicoDePagamento.pagar('4444-5555-6666', 'Empresa B', 120.0)

    assert.deepStrictEqual(servicoDePagamento.consultarUltimoPagamento(), {
      codigoBarras: '4444-5555-6666',
      empresa: 'Empresa B',
      valor: 120.0,
      categoria: 'cara'
    })
  })

  it('retorna null quando nao existe pagamento realizado', function () {
    const servicoDePagamento = new ServicoDePagamento()

    assert.strictEqual(servicoDePagamento.consultarUltimoPagamento(), null)
  })

  it('nao permite pagamento sem codigo de barras', function () {
    const servicoDePagamento = new ServicoDePagamento()

    assert.throws(
      () => servicoDePagamento.pagar('', 'Empresa A', 50.0),
      /Codigo de barras e obrigatorio/
    )
  })

  it('nao permite pagamento com valor menor ou igual a zero', function () {
    const servicoDePagamento = new ServicoDePagamento()

    assert.throws(
      () => servicoDePagamento.pagar('1111-2222-3333', 'Empresa A', 0),
      /Valor deve ser maior que zero/
    )
  })
})
