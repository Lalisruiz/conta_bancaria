import * as readlineSync from 'readline-sync';
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { ContaController } from '../repository/contaController';
function main() {
    const controller = new ContaController();
    while (true) {
        console.log('\n=== MENU CONTA BANCÁRIA ===');
        console.log('1 - Cadastrar Conta Corrente');
        console.log('2 - Cadastrar Conta Poupança');
        console.log('3 - Visualizar Contas');
        console.log('4 - Depositar');
        console.log('5 - Sacar');
        console.log('6 - Atualizar Conta (somente titular)');
        console.log('7 - Deletar Conta');
        console.log('0 - Sair');
        const opcao = readlineSync.questionInt('Escolha uma opção: ');
        switch (opcao) {
            case 1:
                console.log('\n--- Cadastro de Conta Corrente ---');
                const numeroCC = readlineSync.questionInt('Número da conta: ');
                const titularCC = readlineSync.question('Titular da conta: ');
                const saldoCC = readlineSync.questionFloat('Saldo inicial: ');
                const novaCC = new ContaCorrente(numeroCC, titularCC, saldoCC);
                controller.cadastrar(novaCC);
                console.log('✅ Conta Corrente cadastrada com sucesso!');
                break;
            case 2:
                console.log('\n--- Cadastro de Conta Poupança ---');
                const numeroCP = readlineSync.questionInt('Número da conta: ');
                const titularCP = readlineSync.question('Titular da conta: ');
                const saldoCP = readlineSync.questionFloat('Saldo inicial: ');
                const aniversario = readlineSync.questionInt('Dia do aniversário da conta (1-31): ');
                const novaCP = new ContaPoupanca(numeroCP, titularCP, saldoCP, aniversario);
                controller.cadastrar(novaCP);
                console.log('✅ Conta Poupança cadastrada com sucesso!');
                break;
            case 3:
                console.log('\n--- Visualização das Contas ---');
                const contas = controller.buscarTodasContas();
                if (contas.length === 0) {
                    console.log('❌ Nenhuma conta encontrada.');
                }
                else {
                    contas.forEach((c) => c.imprimir());
                }
                break;
            case 4:
                console.log('\n--- Depósito ---');
                const numDep = readlineSync.questionInt('Número da conta: ');
                const valorDep = readlineSync.questionFloat('Valor para depósito: ');
                const contaDep = controller.buscarContaPorNumero(numDep);
                if (contaDep) {
                    contaDep.depositar(valorDep);
                }
                else {
                    console.log('❌ Conta não encontrada.');
                }
                break;
            case 5:
                console.log('\n--- Saque ---');
                const numSaq = readlineSync.questionInt('Número da conta: ');
                const valorSaq = readlineSync.questionFloat('Valor para saque: ');
                const contaSaq = controller.buscarContaPorNumero(numSaq);
                if (contaSaq) {
                    contaSaq.sacar(valorSaq);
                }
                else {
                    console.log('❌ Conta não encontrada.');
                }
                break;
            case 6:
                console.log('\n--- Atualizar Conta ---');
                const numAtualizar = readlineSync.questionInt('Número da conta que deseja atualizar: ');
                const contaAtual = controller.buscarContaPorNumero(numAtualizar);
                if (contaAtual) {
                    const novoTitular = readlineSync.question('Novo nome do titular: ');
                    contaAtual.titular = novoTitular;
                    controller.atualizar(contaAtual);
                    console.log('✅ Conta atualizada com sucesso!');
                }
                else {
                    console.log('❌ Conta não encontrada.');
                }
                break;
            case 7:
                console.log('\n--- Deletar Conta ---');
                const numDel = readlineSync.questionInt('Número da conta a deletar: ');
                const contaDel = controller.buscarContaPorNumero(numDel);
                if (contaDel) {
                    const confirm = readlineSync.question('Tem certeza que deseja deletar? (s/n): ').toLowerCase();
                    if (confirm === 's') {
                        controller.deletar(numDel);
                        console.log('✅ Conta deletada com sucesso!');
                    }
                    else {
                        console.log('❌ Operação cancelada.');
                    }
                }
                else {
                    console.log('❌ Conta não encontrada.');
                }
                break;
            case 0:
                console.log('👋 Saindo do programa...');
                return;
            default:
                console.log('❌ Opção inválida. Tente novamente.');
        }
    }
}
main();
