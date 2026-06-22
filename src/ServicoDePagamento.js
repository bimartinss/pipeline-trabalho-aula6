class ServicoDePagamento {
  constructor() {
    this.pagamentos = []
  }

  pagar(codigoBarras, empresa, valor) {
    if (!codigoBarras) {
      throw new Error('Codigo de barras e obrigatorio')
    }

    if (!empresa) {
      throw new Error('Empresa e obrigatoria')
    }

    if (valor <= 0) {
      throw new Error('Valor deve ser maior que zero')
    }

    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100.0 ? 'cara' : 'padrao'
    }

    this.pagamentos.push(pagamento)

    return pagamento
  }

  consultarUltimoPagamento() {
    if (this.pagamentos.length === 0) {
      return null
    }

    return this.pagamentos[this.pagamentos.length - 1]
  }
}

module.exports = ServicoDePagamento
