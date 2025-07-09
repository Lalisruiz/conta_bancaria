"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, titular, saldoInicial) {
        this._numero = numero;
        this._titular = titular;
        this._saldo = saldoInicial;
    }
    // Getters e Setters
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get titular() {
        return this._titular;
    }
    set titular(value) {
        this._titular = value;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(value) {
        this._saldo = value;
    }
    // Método imprimir() para exibir os dados
    imprimir() {
        console.log('--- Dados da Conta ---');
        console.log(`Conta: ${this._numero}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
        console.log('------------------------');
    }
    // Método para depositar valor
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('❌ Valor inválido para depósito.');
        }
    }
    // Método para sacar valor
    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('❌ Saque não permitido. Verifique o valor ou saldo.');
        }
    }
}
exports.Conta = Conta;
