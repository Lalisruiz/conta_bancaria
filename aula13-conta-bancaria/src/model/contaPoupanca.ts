import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
  private _aniversario: number;

  constructor(numero: number, titular: string, saldoInicial: number, aniversario: number) {
    super(numero, titular, saldoInicial);
    this._aniversario = aniversario;
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('❌ Valor inválido ou saldo insuficiente.');
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

  public get aniversario(): number {
    return this._aniversario;
  }

  public set aniversario(dia: number) {
    this._aniversario = dia;
  }

  public override imprimir(): void {
    super.imprimir();
    console.log(`Aniversário da Conta: dia ${this._aniversario}`);
  }
}
