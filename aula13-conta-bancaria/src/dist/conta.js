export class Conta {
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
}
