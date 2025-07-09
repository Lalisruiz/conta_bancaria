import readlineSync from "readline-sync";
import { Colors } from "./util";

export class Menu {
  static iniciar() {
    console.clear();
    console.log(Colors.fgBlue + "Bem-vinda ao Banco Larissa!" + Colors.reset);

    let opcao: number;
    do {
      console.log("\n1 - Ver Saldo");
      console.log("2 - Depositar");
      console.log("3 - Sacar");
      console.log("0 - Sair");

      opcao = parseInt(readlineSync.question("Escolha uma opção: "));

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
