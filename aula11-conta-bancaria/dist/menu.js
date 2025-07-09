"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const util_1 = require("./util");
class Menu {
    static iniciar() {
        console.clear();
        console.log(util_1.Colors.fgBlue + "Bem-vinda ao Banco Larissa!" + util_1.Colors.reset);
        let opcao;
        do {
            console.log("\n1 - Ver Saldo");
            console.log("2 - Depositar");
            console.log("3 - Sacar");
            console.log("0 - Sair");
            opcao = parseInt(readline_sync_1.default.question("Escolha uma opção: "));
            switch (opcao) {
                case 1:
                    console.log("Saldo: R$ 0");
                    break;
                case 2:
                    console.log("Depósito realizado (exemplo)");
                    break;
                case 3:
                    console.log("Saque realizado (exemplo)");
                    break;
                case 0:
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
        } while (opcao !== 0);
    }
}
exports.Menu = Menu;
