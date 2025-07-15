import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";   
import { colors } from "../util/Colors";
import { ContaCorrente } from "../model/ContaCorrente";
import { ContaPoupanca } from "../model/ContaPoupanca";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    // Método auxiliar para buscar conta no array
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

// Procura uma Conta por número e exibe os dados
public procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
        buscaConta.visualizar();
    } else 
        console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
    }


    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\nConta Número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
           this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
           console.log(colors.fg.green, "\nA Conta numero: " + conta.numero +
            " foi atualizada com sucesso!", colors.reset);
        } else 
        console.log(colors.fg.red, "\nA Conta numero: " + conta.numero +
        " não foi encontrada!", colors.reset); 
     }

deletar(numero: number): void {
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

    sacar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.sacar(valor);
        } else {
            console.log(colors.fg.red, `\nA Conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.depositar(valor);
        } else {
            console.log(colors.fg.red, `\nA Conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            contaOrigem.transferir(contaDestino, valor);
        } else {
            console.log(colors.fg.red, "\nUma das contas não foi encontrada!", colors.reset);
        }
    }

    /* Métodos Auxiliares */
    public gerarNumero(): number {
        return ++this.numero;
    }
}