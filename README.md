# Sistema Bancário - Conta Bancária

Um sistema de gerenciamento de contas bancárias desenvolvido em TypeScript, implementando conceitos de Programação Orientada a Objetos (POO) como herança, polimorfismo e encapsulamento.

## Sobre o Projeto

Este projeto simula operações bancárias básicas através de um menu interativo no terminal. O sistema permite gerenciar diferentes tipos de contas bancárias (Conta Corrente e Conta Poupança) com funcionalidades completas de CRUD (Create, Read, Update, Delete) e operações financeiras.

## Funcionalidades

### Gerenciamento de Contas
- **Criar Conta** - Cadastro de novas contas (Corrente ou Poupança)
- **Listar Contas** - Visualização de todas as contas cadastradas
- **Buscar Conta** - Consulta por número da conta
- **Atualizar Conta** - Edição de dados da conta
- **Deletar Conta** - Remoção de conta do sistema

### Operações Financeiras
- **Saque** - Retirada de valores (com validação de saldo/limite)
- **Depósito** - Adição de valores à conta
- **Transferência** - Movimentação entre contas

### Tipos de Conta
- **Conta Corrente**: Possui limite para saque
- **Conta Poupança**: Possui data de aniversário para rendimentos

## Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime JavaScript
- **readline-sync** - Interface para entrada de dados no terminal
- **colors** - Colorização do terminal para melhor UX

## Estrutura do Projeto

```
conta_bancaria/
├── src/
│   ├── controller/
│   │   ├── ContaController.ts     # Controlador principal das operações
│   │   └── ContaController.js
│   ├── model/
│   │   ├── Conta.ts              # Classe abstrata base
│   │   ├── ContaCorrente.ts      # Implementação da Conta Corrente
│   │   ├── ContaPoupanca.ts      # Implementação da Conta Poupança
│   │   └── *.js                  # Arquivos compilados
│   ├── repository/
│   │   ├── ContaRepository.ts    # Interface do repositório
│   │   └── ContaRepository.js
│   └── util/
│       ├── Colors.ts             # Configurações de cores
│       └── Colors.js
├── Menu.ts                       # Menu principal (TypeScript)
├── Menu.js                       # Menu principal (JavaScript compilado)
├── package.json
├── tsconfig.json
└── README.md
```

## Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Lalisruiz/conta_bancaria.git
   cd conta_bancaria
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   
   **Opção 1: Executar TypeScript diretamente**
   ```bash
   npm start
   ```
   
   **Opção 2: Compilar e executar JavaScript**
   ```bash
   npm run build
   node Menu.js
   ```

## Como Usar

1. **Inicie a aplicação** e você verá o menu principal do "Banco do Brazil com Z"

2. **Navegue pelas opções** digitando o número correspondente:
   - `1` - Criar nova conta
   - `2` - Ver todas as contas
   - `3` - Buscar conta específica
   - `4` - Atualizar dados da conta
   - `5` - Deletar conta
   - `6` - Realizar saque
   - `7` - Fazer depósito
   - `8` - Transferir entre contas
   - `9` - Sair do sistema

3. **Siga as instruções** na tela para cada operação

### Exemplos de Uso

#### Criando uma Conta Corrente
```
1 - Criar Conta
Digite o Número da agência: 123
Digite o Nome do Titular: João Silva  
Digite o tipo da Conta: 1 (Conta Corrente)
Digite o Saldo da conta (R$): 1000.00
Digite o Limite da Conta (R$): 500.00
```

#### Realizando um Saque
```
6 - Sacar
Digite o número da Conta: 2
Digite o valor do Saque (R$): 200.00
```

## Arquitetura

### Padrões Utilizados
- **MVC (Model-View-Controller)** - Separação de responsabilidades
- **Repository Pattern** - Abstração da camada de dados
- **Herança** - Conta como classe base para especializações
- **Polimorfismo** - Métodos específicos por tipo de conta

### Conceitos de POO Aplicados
- **Encapsulamento** - Propriedades privadas com getters/setters
- **Herança** - ContaCorrente e ContaPoupanca herdam de Conta
- **Polimorfismo** - Implementação específica do método `sacar()`
- **Abstração** - Classe Conta como modelo base abstrato

## Dados de Teste

O sistema vem com contas pré-cadastradas para teste:
- **Conta Corrente**: Nº 2, Titular: Mariana, Saldo: R$ 15.000,00, Limite: R$ 1.000,00
- **Conta Poupança**: Nº 3, Titular: Victor, Saldo: R$ 1.000,00, Aniversário: dia 10

## Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Autora

**Larissa Ruiz**
- GitHub: [@Lalisruiz](https://github.com/Lalisruiz)
- Projeto desenvolvido durante o bootcamp da Generation Brasil
- Turma JavaScript 08

---

Se gostou, considere dar uma estrela!
