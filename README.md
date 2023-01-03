# Desafio Cashforce

Como instalar e rodar o projeto:

  Clone o repositório:
    
    git clone git@github.com:devdinho/cashforce.git

  Na pasta raiz do backend, instale as dependências:

    npm install
  
  Para iniciar o backend:
  
    npm start
  
  Backend estará disponível no endpoint: localhost:3000/api

  Na pasta raiz do frontend, instale as dependências:
  
    npm install
  
  Para iniciar o frontend:

    npm run dev
  
  Frontend estará disponível no endpoint: 

    localhost:5173

Tecnologias utilizadas:

  #### Frontend:

  - [x] **React (Vite)**
  
  #### Backend:

  - [x] **Cors**
  - [x] **Express**
  - [x] **Mysql2**
  - [x] **Sequelize**

Projeto realizado sobre um banco de dados pré-populado.
[Cashforce Database](https://gist.githubusercontent.com/Allan96/a3538e88600559587155a01b0330124e/raw/c7ad85e464dca320fbf54b5e84fb1dd79a888511/teste.sql)

Configuração de conexão com o banco deve ser atualizada de acordo com as credenciais locais.

Configurações atuais:

    backend/src/config/database.js

    username: "root",
    password: "",
    database: "cashforce_v3"
