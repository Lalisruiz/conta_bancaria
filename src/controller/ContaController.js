"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaController = void 0;
const Colors_1 = require("../util/Colors");
class ContaController {
    constructor() {
        this.listaContas = new Array();
        this.numero = 0;
    }
    // Busca uma conta pelo número no array de contas
    buscarNoArray(numero) {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
    // Procura e exibe os dados de uma conta específica
    procurarPorNumero(numero) {
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta != null) {
            buscaConta.visualizar();
        }
        else {
            console.log(Colors_1.colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", Colors_1.colors.reset);
        }
    }
    // Lista todas as contas cadastradas
    listarTodas() {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    // Cadastra uma nova conta
    cadastrar(conta) {
        this.listaContas.push(conta);
        console.log(Colors_1.colors.fg.green, `\nConta Número: ${conta.numero} foi criada com sucesso!`, Colors_1.colors.reset);
    }
    // Atualiza os dados de uma conta existente
    atualizar(conta) {
        let buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(Colors_1.colors.fg.green, "\nA Conta numero: " + conta.numero +
                " foi atualizada com sucesso!", Colors_1.colors.reset);
        }
        else {
            console.log(Colors_1.colors.fg.red, "\nA Conta numero: " + conta.numero +
                " não foi encontrada!", Colors_1.colors.reset);
        }
    }
    // Remove uma conta do sistema
    deletar(numero) {
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(Colors_1.colors.fg.green, "\nA Conta numero: " + numero +
                " foi apagada com sucesso!", Colors_1.colors.reset);
        }
        else {
            console.log(Colors_1.colors.fg.red, "\nA Conta numero: " + numero +
                " não foi encontrada!", Colors_1.colors.reset);
        }
    }
    // Realiza operação de saque
    sacar(numero, valor) {
        const conta = this.buscarNoArray(numero);
        if (conta !== null) {
            if (conta.sacar(valor)) {
                console.log(Colors_1.colors.fg.green, `\nSaque de R$ ${valor.toFixed(2)} na Conta ${numero} realizado com sucesso!`, Colors_1.colors.reset);
            }
        }
        else {
            console.log(Colors_1.colors.fg.red, `\nConta ${numero} não encontrada!`, Colors_1.colors.reset);
        }
    }
    // Realiza operação de depósito
    depositar(numero, valor) {
        const conta = this.buscarNoArray(numero);
        if (conta !== null) {
            conta.depositar(valor);
            console.log(Colors_1.colors.fg.green, `\nDepósito de R$ ${valor.toFixed(2)} na Conta ${numero} realizado com sucesso!`, Colors_1.colors.reset);
        }
        else {
            console.log(Colors_1.colors.fg.red, `\nConta ${numero} não encontrada!`, Colors_1.colors.reset);
        }
    }
    // Realiza transferência entre contas
    transferir(numeroOrigem, numeroDestino, valor) {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);
        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
                console.log(Colors_1.colors.fg.green, `\nTransferência de R$ ${valor.toFixed(2)} da Conta ${numeroOrigem}` +
                    ` para Conta ${numeroDestino} realizada com sucesso!`, Colors_1.colors.reset);
            }
        }
        else {
            console.log(Colors_1.colors.fg.red, `\nConta ${numeroOrigem} e/ou Conta ${numeroDestino} não encontradas!`, Colors_1.colors.reset);
        }
    }
    // Gera um novo número para conta
    gerarNumero() {
        return ++this.numero;
    }
}
exports.ContaController = ContaController;
