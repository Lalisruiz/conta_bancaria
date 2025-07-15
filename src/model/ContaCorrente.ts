import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, 
                titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        
        // Validação direta no construtor
        if (limite < 0) {
            throw new Error("Limite não pode ser negativo");
        }
        this._limite = limite;
    }
    
    public get limite(): number {
        return this._limite;
    }

    public set limite(limite: number) {
        if (limite < 0) {
            throw new Error("Limite não pode ser negativo");
        }
        this._limite = limite;
    }

    public sacar(valor: number): boolean {
        if (valor <= 0) {
            console.log("\nValor deve ser positivo!");
            return false;
        }

        const saldoTotal = this.saldo + this._limite;
        if (saldoTotal < valor) {
            console.log(`\nSaldo insuficiente! (Saldo: R$${this.saldo.toFixed(2)}, Limite: R$${this._limite.toFixed(2)})`);
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: R$${this._limite.toFixed(2)}`);
        console.log(`Disponível: R$${(this.saldo + this._limite).toFixed(2)}`);
        console.log("------------------------------");
    }
}