import { Conta } from "../model/conta";

export interface ContaRepository {
  buscarTodasContas(): Conta[];
  buscarContaPorNumero(numero: number): Conta | undefined;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;
}
