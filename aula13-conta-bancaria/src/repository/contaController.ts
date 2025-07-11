import { ContaRepository } from "./contaRepository";
import { Conta } from "../model/conta";

export class ContaController implements ContaRepository {
  private contas: Conta[] = [];

  buscarTodasContas(): Conta[] {
    return this.contas;
  }

  buscarContaPorNumero(numero: number): Conta | undefined {
    return this.contas.find(conta => conta.numero === numero);
  }

  cadastrar(conta: Conta): void {
    this.contas.push(conta);
  }

  atualizar(conta: Conta): void {
    const index = this.contas.findIndex(c => c.numero === conta.numero);
    if (index !== -1) {
      this.contas[index] = conta;
    }
  }

  deletar(numero: number): void {
    this.contas = this.contas.filter(conta => conta.numero !== numero);
  }
}
