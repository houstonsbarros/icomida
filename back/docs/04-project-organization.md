# 🗂️ Organização do projeto

A organização do projeto é uma parte fundamental para o sucesso de qualquer projeto de software. Uma boa organização do projeto ajuda a manter o código limpo, facilita a colaboração entre os membros da equipe e torna o desenvolvimento mais eficiente.

## 🦄 Organização das camadas

O projeto iComida segue a arquitetura de software Clean Architecture, que é uma arquitetura de software que visa separar as responsabilidades do projeto em camadas, de forma que cada camada tenha uma responsabilidade única e bem definida.

As camadas do projeto iComida são as seguintes:

```
                     ----------------------------
                     |       UI / Interface     |
                     ----------------------------
                                   |
                     ----------------------------
                     |       Application        |
                     | Use Cases / Interactors  |
                     ----------------------------
                                   |
                     ----------------------------
                     |         Domain           |
                     |Entities / Business Logics|
                     ----------------------------
                                   |
                     ----------------------------
                     |       Infrastructure     |
                     |  Frameworks / Drivers /  |
                     |Data Providers / Gateways |
                     ----------------------------

```

## 📂 Estrutura de pastas

A estrutura de pastas do projeto iComida segue as boas práticas de organização de projetos de software. Aqui está a estrutura de pastas do projeto:

```shell
icomida/                       👉 Raiz do projeto
├── docs/                      👉 Documentação do projeto
├── src/
│ ├── application/             👉 Camada de aplicação
│ │ ├── use_cases/             👉 Casos de uso da aplicação
│ │ └── services/              👉 Serviços da aplicação
│ ├── domain/                  👉 Camada de domínio
│ │ ├── entities/              👉 Entidades do domínio
│ │ ├── repositories/          👉 Repositórios do domínio
│ ├── infrastructure/          👉 Camada de infraestrutura
│ │ ├── controllers/           👉 Controladores da aplicação
│ │ ├── data_providers/        👉 Provedores de dados
│ │ ├── frameworks_drivers/    👉 Frameworks e drivers
│ │ └── orm/                   👉 Mapeamento objeto-relacional
│ ├── interfaces/              👉 Interfaces da aplicação
│ │ ├── http/                  👉 Interface HTTP
│ │ │ ├── routes/              👉 Rotas da aplicação
│ │ │ ├── schemas/             👉 Esquemas de validação
│ │ │ └── controllers/         👉 Controladores HTTP
│ │ └── cli/
│ └── utils/
└── tests/

```
