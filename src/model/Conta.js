"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, agencia, tipo, titular, saldo) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(agencia) {
        this._agencia = agencia;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get titular() {
        return this._titular;
    }
    set titular(titular) {
        this._titular = titular;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    sacar(valor) {
        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log("Transferência realizada com sucesso!");
        }
        else {
            console.log("Transferência falhou: saldo insuficiente!");
        }
    }
    visualizar() {
        let tipo = "";
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }
        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));
    }
}
exports.Conta = Conta;
