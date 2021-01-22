# SIP Digital Backend

Teste técnico para vaga da SIP Digital.

#### Escopo do teste
- Login com autenticação JWT
- Cadastro de produtos, com imagem, nome e valor
- Express e Sequelize

## Getting Started

Instruções necessárias para utilização e testes do projeto

### Pré-requisitos

Dependências ou software necessários para rodar o projeto:

- Docker (opcional)
- Postgres SQL (opcional, qualquer outro banco suportado pelo Sequelize ORM)
- Node.JS

### Instalação

#### Nodemon

1. Clone o repositório:
`git clone https://github.com/alissonsilvajs/SIPDigitalBackend.git`

2. Instale as dependências
`npm install`: Se estiver utilizando `npm`
`yarn install`: Se estiver utilizando `yarn`

3. Criando a pasta para uploads de imagens
`mkdir tmp\uploads`: Se estiver utilizando `Windows`
`mkdir -p tmp/{uploads}`: Se estiver utilizando `Linux`

4. Criar o arquivo `.env`
Esse arquivo é necessário para definir variaveis que passa
para aplicação.

5. Gerar a chave privada para encriptar os dados do JWT
A chave deverá ser de no mínimo `32 caracteres` e no máximo `64 caracteres`

- Ex.: `aff1c29e15cc9e50a5ce7c5b5e568e2166ea63b6b3cc277ba79015df045f65f3`

6. Modificar o arquivo `.env`

- `PORT`: Em qual porta o back-end será rodado (obrigatório)
- `APP_SECRET`: A chave privada do projeto (obrigatório)

- `MULTER_STORAGE_TYPE`: O tipo de armazenamento das imagens (obrigatório)
- `MULTER_ENDPOINT`: O endpoint do bucket (opcional, se estiver utilizando o tipo local)
- `MULTER_BUCKET_NAME`: O nome do bucket (opcional, se estiver utilizando o tipo local)

7. Modificar o dados do banco de dados

- `dialect`: O banco de dados está sendo utilizado.
- `host`: O IP que o banco de dados está utilizando.
- `username`: O usuário do banco de dados.
- `password`: A senha do banco de dados.
- `database`: O nome do banco de dados.

8. Migra as colunas para o banco de dados

`npx sequelize-cli migrate`: Se estiver utilizando o `npm`
`yarn sequelize db:migrate`: Se estiver utilizando o `yarn`

8. Inicia o projeto

`npm run dev`: Se estiver utilizando o `npm`
`yarn run dev`: Se estiver utilizando o `yarn`

## Feito com

As dependências utilizadas no projetos:

* [Express](https://github.com/expressjs/express)
* [Sequelize](https://github.com/sequelize/sequelize)
* [Jest](https://github.com/facebook/jest)
* [JWT](https://github.com/auth0/node-jsonwebtoken)
* [Multer](https://github.com/expressjs/multer)
* [Husky](https://github.com/typicode/husky)
* [Lint Staged](https://github.com/okonet/lint-staged)
* [Babel](https://github.com/babel/babel)
* [ESLint](https://github.com/eslint/eslint)
* [Prettier](https://github.com/prettier/prettier)
* [Winston](https://github.com/winstonjs/winston)
* [Yup](https://github.com/jquense/yup)
* [Nodemon](https://github.com/remy/nodemon)

## Utilização

Foi disponibilizado a documentação de toda API.
Para ver a documentação, veja em [API Docs](APIdocs.md).

## CI/CD

O CI utilizado foi o `CircleCI`, segue abaixo o mesmo:

* [CircleCI](https://circleci.com/)

## Versões

Foi utilizado para versionamento o [SemVer](http://semver.org).
Para ver as versões disponíveis, veja em [Tags desse repositório](https://github.com/alissonsilvajs/SIPDigitalBackend/tags).

## Conquistas

* Já utilizei o `Sequelize` e tive muita raiva no ano passado. Mas nesse teste finalmente consegui entender!
* [Referência Sequelize](https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize-parte-2/)

## Autor

* *Alisson Silva* - [alissonsilvajs](https://github.com/alissonsilvajs)

## Licença

O projeto é licenciado sobre a licença `GPL-3` - Veja em [LICENSE](LICENSE) para mais detalhes
