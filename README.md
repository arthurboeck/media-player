# Media Player

Media player desenvolvido em React e NodeJS, com o objetivo de gerenciar playlists de músicas, onde mesmo proprõe demostrar o uso e aplicação de uma abordagem arquitetura MVC (Model, View, Controller).

Aplicação desenvolvida para a disciplina de Arquitetura de Software BackEnd na Especialização em Arquitetura de Software Distribuído - PUCMG.

## Dependencias BackEnd
* [Node](https://nodejs.org/en/docs/)
* [Npm](https://docs.npmjs.com/)
* [Express](https://github.com/expressjs/express)
* [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
* [Swagger AutoGen](https://swagger-autogen.github.io/docs/getting-started/quick-start)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

## Dependencias FrontEnd
* [React](https://react.dev/learn)
* [Next](https://nextjs.org/docs/getting-started)
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

## Como executar a aplicação de BackEnd

O projeto pode ser startado e executado com base nos seguintes comandos na raiz do projeto:

Passo 1: Install de dependencias:
```shell
npm install
```
Passo 2: Start do projeto:
```shell
npm start
```

Após isso o projeto estará rodando na porta 8080, podendo ser acessado em [http://localhost:8080](http://localhost:8080), ou via swagger disponibilizado em [http://localhost:8080/swagger-ui](http://localhost:8080/swagger-ui/).

## Como executar a aplicação de FrontEnd

O projeto pode ser startado e executado com base nos seguintes comandos no pacote ./view do projeto:

Passo 1: Install de dependencias:
```shell
npm install
```
Passo 2: Build dos projeto:
```shell
npm run build
```
Passo 3: Start do projeto:
```shell
npm run start
```

Após isso o projeto estará rodando na porta 300, podendo ser acessado em [http://localhost:3000](http://localhost:3000).

## Rotas disponibilizadas

A API possui as seguintes rotas disponibilizadas:

| Mapeamento da URL                               | Operação (CRUD) | Descrição                                      |
|-------------------------------------------------|-----------------|------------------------------------------------|
| GET       /swagger-ui                           | INFO            | Swagger da aplicação                           |
| POST      /song                                 | CREATE          | Cria uma musica                                |
| GET       /song/{id}/detail                     | RETRIEVE        | Retorna os detalhes de uma musica              |
| POST      /api/v1/playlists                     | CREATE          | Cria uma playlist                              |
| GET       /api/v1/playlists                     | RETRIEVE        | Retorna a lista de todas as playlists          |
| GET       /api/v1/playlists/{id}/detail         | RETRIEVE        | Retorna os detalhes de uma playlist existente  |
| PUT       /api/v1/playlists/{id}                | UPDATE          | Atualiza os detalhes de uma playlist existente |
| DELETE    /api/v1/playlist/{id}                 | DELETE          | Deleta uma playlist                            |
| POST      /api/v1/playlists/{id}/song           | CREATE          | Adicona uma musica a uma playlist existente    |
| DELETE    /api/v1/playlists/{id}/song/{songId}  | DELETE          | Remove uma musica de uma playlist existente    |

## Contribuições

Estes projeto foi desenvolvido pelos alunos listados abaixo:

- Andrew Costa Silva - 1137978
- Arthur Guterres Boeck - 1470051
- Danielson Augusto - 1481701
- Diego Ribeiro Alvarenga Silva - 1200783
- Guilherme Bruno Rodrigues Silva - 1177412
- Leandro Molinari - 1453411
