import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";   
import { colors } from "../util/Colors";
import { ContaCorrente } from "../model/ContaCorrente";
import { ContaPoupanca } from "../model/ContaPoupanca";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    // Busca uma conta pelo número no array de contas
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

    // Procura e exibe os dados de uma conta específica
    public procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    // Lista todas as contas cadastradas
    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    // Cadastra uma nova conta
    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\nConta Número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }

    // Atualiza os dados de uma conta existente
    public atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + 
                " foi atualizada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero + 
                " não foi encontrada!", colors.reset);
        }
    }

    // Remove uma conta do sistema
    public deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        
        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta numero: " + numero + 
                " foi apagada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta numero: " + numero + 
                " não foi encontrada!", colors.reset);
        }
    }

    // Realiza operação de saque
    public sacar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);
        
        if (conta !== null) {
            if (conta.sacar(valor)) {
                console.log(
                    colors.fg.green,
                    `\nSaque de R$ ${valor.toFixed(2)} na Conta ${numero} realizado com sucesso!`,
                    colors.reset
                );
            }
        } else {
            console.log(
                colors.fg.red,
                `\nConta ${numero} não encontrada!`,
                colors.reset
            );
        }
    }

    // Realiza operação de depósito
    public depositar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.depositar(valor);
            console.log(
                colors.fg.green,
                `\nDepósito de R$ ${valor.toFixed(2)} na Conta ${numero} realizado com sucesso!`,
                colors.reset
            );
        } else {
            console.log(
                colors.fg.red,
                `\nConta ${numero} não encontrada!`,
                colors.reset
            );
        }
    }

    // Realiza transferência entre contas
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
                console.log(
                    colors.fg.green,
                    `\nTransferência de R$ ${valor.toFixed(2)} da Conta ${numeroOrigem}` +
                    ` para Conta ${numeroDestino} realizada com sucesso!`,
                    colors.reset
                );
            }
        } else {
            console.log(
                colors.fg.red,
                `\nConta ${numeroOrigem} e/ou Conta ${numeroDestino} não encontradas!`,
                colors.reset
            );
        }
    }

    // Gera um novo número para conta
    public gerarNumero(): number {
        return ++this.numero;
    }
}