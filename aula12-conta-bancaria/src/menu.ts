import { Conta } from "./model/conta";
import ler = require('readline-sync');

function main() {
  // Criando uma lista de contas
  const conta1 = new Conta(1, 'Larissa Ruiz', 1000);
  const conta2 = new Conta(2, 'João Silva', 500);
  const contas: Array<Conta> = [conta1, conta2];

  while (true) {
    console.log('\n=== MENU CONTA BANCÁRIA ===');
    console.log('1 - Visualizar Contas');
    console.log('2 - Depositar');
    console.log('3 - Sacar');
    console.log('0 - Sair');

    const opcao = ler.questionInt('Escolha uma opção: ');

    switch (opcao) {
      case 1:
        console.log('\n--- Visualização das Contas ---');
        contas.forEach((c) => c.imprimir());
        break;

      case 2:
        console.log('\n--- Depósito ---');
        const numeroDep = ler.questionInt('Número da conta: ');
        const valorDep = ler.questionFloat('Valor para depósito: ');
        const contaDep = contas.find((c) => c['numero'] === numeroDep);
        if (contaDep) {
          contaDep.depositar(valorDep);
        } else {
          console.log('❌ Conta não encontrada.');
        }
        break;

      case 3:
        console.log('\n--- Saque ---');
        const numeroSaq = ler.questionInt('Número da conta: ');
        const valorSaq = ler.questionFloat('Valor para saque: ');
        const contaSaq = contas.find((c) => c['numero'] === numeroSaq);
        if (contaSaq) {
          contaSaq.sacar(valorSaq);
        } else {
          console.log('❌ Conta não encontrada.');
        }
        break;

      case 0:
        console.log('Saindo do programa...');
        return;  // sai da função main e encerra o programa

      default:
        console.log('Opção inválida. Tente novamente.');
    }
  }
}

// Chama a função principal para iniciar o programa
main();
