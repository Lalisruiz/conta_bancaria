"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        // Validação direta no construtor
        if (limite < 0) {
            throw new Error("Limite não pode ser negativo");
        }
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        if (limite < 0) {
            throw new Error("Limite não pode ser negativo");
        }
        this._limite = limite;
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("\nValor deve ser positivo!");
            return false;
        }
        const saldoTotal = this.saldo + this._limite;
        if (saldoTotal < valor) {
            console.log(`\nSaldo insuficiente! (Saldo: R$${this.saldo.toFixed(2)}, Limite: R$${this._limite.toFixed(2)})`);
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    visualizar() {
        super.visualizar();
        console.log(`Limite: R$${this._limite.toFixed(2)}`);
        console.log(`Disponível: R$${(this.saldo + this._limite).toFixed(2)}`);
        console.log("------------------------------");
    }
}
exports.ContaCorrente = ContaCorrente;
