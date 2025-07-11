import { Conta } from "./conta";

export class ContaCorrente extends Conta {
  private _taxa: number = 2.5;

  constructor(numero: number, titular: string, saldoInicial: number) {
    super(numero, titular, saldoInicial);
  }

  public sacar(valor: number): void {
    const total = valor + this._taxa;
    if (valor > 0 && total <= this.saldo) {
      this.saldo -= total;
      console.log(`✅ Saque de R$ ${valor.toFixed(2)} + taxa R$ ${this._taxa.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('❌ Saque inválido ou saldo insuficiente.');
    }
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('❌ Valor inválido para depósito.');
    }
  }
}
