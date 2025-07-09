export class Conta {
  private _numero: number;
  private _titular: string;
  private _saldo: number;

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

  // Método para depositar valor
  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('❌ Valor inválido para depósito.');
    }
  }

  // Método para sacar valor
  public sacar(valor: number): void {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('❌ Saque não permitido. Verifique o valor ou saldo.');
    }
  }
}
