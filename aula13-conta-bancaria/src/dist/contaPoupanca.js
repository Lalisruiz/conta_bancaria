import { Conta } from "./model/conta";
export class ContaPoupanca extends Conta {
    constructor(numero, titular, saldoInicial, aniversario) {
        super(numero, titular, saldoInicial);
        this._aniversario = aniversario;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('❌ Valor inválido ou saldo insuficiente.');
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
    get aniversario() {
        return this._aniversario;
    }
    set aniversario(dia) {
        this._aniversario = dia;
    }
    imprimir() {
        super.imprimir();
        console.log(`Aniversário da Conta: dia ${this._aniversario}`);
    }
}
