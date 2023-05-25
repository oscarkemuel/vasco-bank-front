Vasco Bank - Fron-end
=====

Padrão de commit
----------------
*   Node.js v14

Como rodar
----------

1.  Fazer clone do projeto
2.  Abrir o terminal na pasta do projeto
3.  Baixar dependencias rodando `npm install` ou `yarn`
4.  Entre no código e crie uma arquivo `.env` na raiz do projeto
5.  Cole o conteúdp do `.env.development` dentro do `.env` que você acabou de criar
6.  Para rodar a Fake API Gateway: `npm run fake-gateway` ou `yarn fake-gateway`
7.  Iniciar o projeto rodando `npm run dev` ou `yarn dev`
8.  Abrir no navegador `http://localhost:3333/`

Padrão de commit
----------------

### Padrão:

`tipo(grupo): commit message`

### Tipos:

*   `feat`: novas features
*   `fix`: soluciona bugs
*   `refactor`: refatoração de código

### Grupos:

*   GF1
*   GF2
*   GF3

### Exemplo:

`feat(GF1): Implementa base do projeto`

## TODO:
*   Definir e configurar tipo de estilização (StyledComponents || CSS Module || Sass)
