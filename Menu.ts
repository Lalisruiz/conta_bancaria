// Importação de módulos necessários
import readlinesync = require("readline-sync");
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { colors } from './src/util/Colors';
import { ContaController } from "./src/controller/ContaController";

export function main() {
    // Instância da Classe ContaController
    let contas: ContaController = new ContaController();
    let opcao: number;

    // Criação de Contas para teste
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contas.cadastrar(contacorrente);

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contas.cadastrar(contapoupanca);

    // Variáveis para operações bancárias
    let numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number;
    let valor: number, numeroDestino: number;
    let titular: string;
    const tiposContas = ["Conta Corrente", "Conta Poupança"];

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, 
        "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("Entre com a opção desejada:                          ", colors.reset);

        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1: {
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                agencia = readlinesync.questionInt("Digite o Número da agência: ");
                titular = readlinesync.question("Digite o Nome do Titular da conta: ");

                console.log("\nDigite o tipo da Conta:");
                console.log("[1] Conta Corrente");
                console.log("[2] Conta Poupança");
                tipo = readlinesync.questionInt("");

                saldo = readlinesync.questionFloat("\nDigite o Saldo da conta (R$): ");

                if (tipo === 1) {
                    limite = readlinesync.questionFloat("Digite o Limite da Conta (R$): ");

                    const novaConta = new ContaCorrente(
                        contas.gerarNumero(),
                        agencia,
                        1,
                        titular,
                        saldo,
                        limite
                    );

                    contas.cadastrar(novaConta);
                    console.log(colors.fg.green, `\nA Conta Corrente número: ${novaConta.numero} foi criada com sucesso!`, colors.reset);
                    console.log("\nObserve que a Conta foi Cadastrada com sucesso. Pressione a tecla enter e crie uma Conta Poupança:");

                } else if (tipo === 2) {
                    aniversario = readlinesync.questionInt("Digite o Dia do aniversário da Conta Poupança: ");

                    const novaConta = new ContaPoupanca(
                        contas.gerarNumero(),
                        agencia,
                        2,
                        titular,
                        saldo,
                        aniversario
                    );

                    contas.cadastrar(novaConta);
                    console.log(colors.fg.green, `\nA Conta número: ${novaConta.numero} foi criada com sucesso!`, colors.reset);

                } else {
                    console.log(colors.fg.red, "\nTipo de conta inválido! Use 1 ou 2.", colors.reset);
                }

                keyPress();
                break;
            }

            case 2: {
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress();
                break;
            }

            case 3: {
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da conta: ");
                contas.procurarPorNumero(numero);
                keyPress();
                break;
            }

            case 4: {
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1: {
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        }
                        case 2: {
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                        }
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
                }
                keyPress();
                break;
            }

            case 5: {
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                keyPress();
                break;
            }

            case 6: {
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress();
                break;
            }

            case 7: {
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress();
                break;
            }

            case 8: {
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da Conta de Origem: ");
                const numeroOrigem = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                const numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor da Transferência (R$): ");
                const valor = readlinesync.questionFloat("");

                contas.transferir(numeroOrigem, numeroDestino, valor);

                keyPress();
                break;
            }

            default: {
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
            }
        }
    }
}

// Exibe informações sobre o desenvolvedor
function sobre(): void {
    console.log('\n*****************************************************');
    console.log('Projeto desenvolvido por: Larissa Ruiz');
    console.log('Aluna na Generation Brasil - Turma JavaScript 08');
    console.log('github.com/conteudoGeneration e github.com/lalisruiz');
    console.log('*****************************************************\n');
}

// Aguarda pressionar enter para continuar
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

// Inicia a aplicação
main();