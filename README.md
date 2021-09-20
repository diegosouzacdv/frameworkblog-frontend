# Blogframework

Desafio reformulaçao de blog da Framework Digital , construir uma nova versão com um framework Web mais atual e utilizando o modelo de APIs.

**Requisitos Técnicos:**

- Código versionado em repositório GIT
- Java versão 8 ou superior
- Spring Boot https://spring.io/  2.5.0
- Banco de Dados Postgresql https://www.postgresql.org/download/   postgresql-13.4-1-windows-x64
- API Restful
- Maven
- Angular 8
- Node.js 

**Deverão ser construídas interfaces Web e APIs de forma a suportar as seguintes operações:**
| header | header |
| ------ | ------ |
| Segurança | Permitir o cadastro de usuários e login com autenticação via token JWT. |
| Post | Permitir o cadastro e consulta de posts com texto, imagens e links. Apenas o criador do post poderá ter permissão para excluí-lo. |
| Comentário | Suportar a adição e exclusão de comentários em posts. Os posts poderão ser visíveis a todos os usuários. Apenas o criador do comentário poderá ter permissão para excluí-lo. |
| Foto | Permitir a criação de álbuns de fotos. As fotos dos álbuns poderão ser visíveis a todos os usuários. Apenas o dono de um álbum poderá excluí-lo. |

* Versão 1.0

## Guia de Contribuição


 <b>Windows</b>

   
<b>Após a instalação abra o Git CMD<b>

<b>1- Configurar Conta</b>

    git config --global user.name "John Doe"             ←(“Nome do User do gitlab ” )
 
    git config --global user.email johndoe@example.com   ←(“email do gitlab ” )

<b>2 - Desabilite a verificação SSL</b>

    git config --global http.sslVerify false
    
<b>3 - Clone o repositório e importe no eclipse</b> 

    git clone frameworkblog

    * Possiveis Problemas *

Problema ao clonar

    git clone https://github.com/diegosouzacdv/frameworkblogApiRest.git
    Cloning into 'frameworkblog'...
    fatal: I don't handle protocol 'https'

E agora? 

<b>Problema:</b> UTF do windows  
<b>Solução:</b> basta digitar o comando git clone e digitar endereço do repositório
    NAO Dê CTRL + C e CTRL + V no link
    Tem que digitar msm.
    

<b>Linux Ubuntu</b>

<i>Após a instalação abra PGADMIN<i>

<b>1- Configurar Banco de dados</b>

    Criar um banco chamado -> blog

    posteriormente alterar senha no arquivo application.properties para a senha que voce escolher nesta instalação;



<i>2 - Abra o terminal e digite para a instalação git o seguinte comando</i>

    sudo apt-get install git

<i>3- Configurar Conta</i>

    git config --global user.name "John Doe"             ←(“Nome do User do gitlab ” )
 
    git config --global user.email johndoe@example.com   ←(“email do gitlab ” )
    
<b>4 - Clone o repositório </b> 

    git clone https://github.com/diegosouzacdv/frameworkblog-frontend.git

    <b>4 - Clone o repositório </b> 

<b>5 - Acessar diretório do onde foi baixado o repositório e executar os comandos: </b> 

    npm -install
    aguarde a instalaçao das dependencias


    ng serve
    aguarde inicializaçao do servidor

    acessar URL http://localhost:4200

    
