# PETSHOP
## ATIVIDADE FINAL - DESENVOLVIMENTO PARA PLATAFORMA WEB

# 1. Pré requisitos <a name="pre-requisitos"></a>

# BACK:

- **Entity framework Core**
- **.NET 8.0**
  - ([.NET](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)). **Instalar versões do .net para nossos projetos.**
- **Sugestão de IDE ([Visual Studio Community](https://visualstudio.microsoft.com/pt-br/vs/community/)).**

# FRONT:

- **node 20.10.0 (LTS)([node](https://nodejs.org/)).**
- **Angular 17**
- **Angular Material 17.0.1**
- **Bootstrap ([bootstrap](https://www.npmjs.com/package/ngx-bootstrap)).**

# DOCKER:

- **WSL (Windows Subsystem linux) 1.1.3 ou mais atual**
- **Permissão para virtualização de hardware habilitada na BIOS**
- **Docker Desktop 4.25.2([Docker Desktop](https://www.docker.com/products/docker-desktop/)).**

# 2. Configurações costumizáveis <a name="configuracoes-costumizaveis"></a>

- **BANCO MONGODB**
- **mongo docker (LATEST)([mongo_docker](https://hub.docker.com/_/mongo)).**
- **mongo compass para visualização ([mongo_compass](https://www.mongodb.com/pt-br/products/tools/compass)).**

- **HOST_URL_DESENVOLVIMENTO**
  - URL de conexão do banco.
  - Default: jdbc:mongodb://root:example@localhost:27017/?authSource=admin
- **USERNAME_DESENVOLVIMENTO**
  - Usuário do banco
  - Default: root
- **PASSWORD_DESENVOLVIMENTO**
  - Senha do banco
  - Default: example

# COMO RODAR APÓS CONFIGURAR?
  - Abrir a pasta **FRONT** rodar o comando no terminal **npm i** para instalar as dependencias. Ao finalizar digitar o comando **npx ng s** no terminal.
  - Abrir a pasta **BACK** procurar o executavel do projeto e abrir no Visual Studio Community. Após abrir o projeto rodar o **WebApi**
  - Para rodar o banco abrir a **Docker Desktop**. Após abrir a pasta **some-mongo** abrir o terminal e dar o comando **docker-compose up -d** após isso deve ser possível visualizar e acesasr o banco dento do Mongo Compass utilizando a URL disponibilizada.

