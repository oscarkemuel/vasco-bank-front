Vasco Bank - Fron-end
=====

Requisitos mínimos
----------------
*   Node.js v14

Como rodar
----------

1.  Fazer clone do projeto
2.  Abrir o terminal na pasta do projeto
3.  Baixar dependencias rodando `npm install` ou `yarn`
4.  Entre no código e crie uma arquivo `.env` na raiz do projeto
5.  Cole o conteúdo do `.env.development` dentro do `.env` que você acabou de criar
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

Git Flow
----------------

![Git flow Image](/public/gitflow.png "Git Flow to Front-end")

### Para criar uma feature:
1. A partir da branch `main`, crie uma nova branch com o seguinte padrão: `grupo-numero`, onde os grupos são os que foram definidos no tópico acima e o número é de 0000 até 9999. Exemplo: `GF1-1111`.
2. Faça os commits na branch da feature
3. Ao finalizar, solicite merge request para a `main`.
4. Caso não haja conflitos, pode aceitar o merge request.
5. Se houver conflitos, tente soluciona-los sem ferir o código do coleguinha, ou peça um help de alguém.

#### Cosiderações importantes:
***Se não souber Git, não hesite em pedir ajuda.**

## TODO:
*   Definir e configurar tipo de estilização (StyledComponents || CSS Module || Sass)
