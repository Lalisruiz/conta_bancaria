export class ContaController {
    constructor() {
        this.contas = [];
    }
    buscarTodasContas() {
        return this.contas;
    }
    buscarContaPorNumero(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }
    cadastrar(conta) {
        this.contas.push(conta);
    }
    atualizar(conta) {
        const index = this.contas.findIndex(c => c.numero === conta.numero);
        if (index !== -1) {
            this.contas[index] = conta;
        }
    }
    deletar(numero) {
        this.contas = this.contas.filter(conta => conta.numero !== numero);
    }
}
