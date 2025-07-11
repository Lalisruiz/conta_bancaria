import { Conta } from "./model/conta";
export class ContaCorrente extends Conta {
    constructor(numero, titular, saldoInicial) {
        super(numero, titular, saldoInicial);
        this._taxa = 2.5;
    }
    sacar(valor) {
        const total = valor + this._taxa;
        if (valor > 0 && total <= this.saldo) {
            this.saldo -= total;
            console.log(`✅ Saque de R$ ${valor.toFixed(2)} + taxa R$ ${this._taxa.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('❌ Saque inválido ou saldo insuficiente.');
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('❌ Valor inválido para depósito.');
        }
    }
}
