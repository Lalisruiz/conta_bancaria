export abstract class Conta {
  private _numero: number;
  private _titular: string;
  protected _saldo: number;

  constructor(numero: number, titular: string, saldoInicial: number) {
    this._numero = numero;
    this._titular = titular;
    this._saldo = saldoInicial;
  }

  // Getters e Setters
  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }

  public get titular(): string {
    return this._titular;
  }
  public set titular(value: string) {
    this._titular = value;
  }

  public get saldo(): number {
    return this._saldo;
  }
  public set saldo(value: number) {
    this._saldo = value;
  }

  // Método imprimir() para exibir os dados
  public imprimir(): void {
    console.log('--- Dados da Conta ---');
    console.log(`Conta: ${this._numero}`);
    console.log(`Titular: ${this._titular}`);
    console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
    console.log('------------------------');
  }

  // Métodos abstratos (sem implementação)
  public abstract depositar(valor: number): void;

  public abstract sacar(valor: number): void;
}
