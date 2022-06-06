<div id="top" align='center'>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  

  <h3 align="center">Projeto CRUD-LOGIN</h3>

  <p align="center">
    Um projeto voltado para LOGIN com validação e CRUD de produtos.
    <br />
    <a href="https://github.com/MatheusSouza70/CRUD-Produtos/issues"><strong>Explore a biblioteca »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/MatheusSouza70/CRUD-Produtos/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/MatheusSouza70/CRUD-Produtos/issues">Pedir uma feature nova</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#ferramentas">Ferramentas</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando-no-projeto">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#referências-e-conhecimentos-adicionais">Referências e Conhecimentos adicionais</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://media.discordapp.net/attachments/704805407906070581/983185875007602728/unknown.png?width=590&height=480)

CRUD
![](https://media.discordapp.net/attachments/704805407906070581/983185797148712970/unknown.png?width=1020&height=320)

<br/>

Este projeto é voltado únicamente para ESTUDOS.

A ideia do projeto é misturar front, back-end com banco de dados.
Um CRUD de produtos com um login funcional, utilizando banco para gerenciar as informações.

<p align="right">(<a href="#top">Voltar para o início</a>)</p>



### Ferramentas

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [Handlebars](https://handlebarsjs.com)
* [Sequelize](https://sequelize.org)
* [Express](https://expressjs.com/pt-br/)
* [Visual Studio Code](https://code.visualstudio.com)


<p align="right">(<a href="#top">Voltar para o início</a>)</p>



<!-- GETTING STARTED -->
## Começando no projeto
Um pequeno exemplo de como iniciar nosso projeto.

### Pré-requisitos

* node
  Instale-o aqui -> (https://nodejs.org/en/)

* npm
  Execute o comando no terminal:
  ```sh
  npm install npm@latest -g
  ```
* XAMPP (Nosso servidor local)
  Instale-o aqui -> (https://www.apachefriends.org/pt_br/index.html)

* MYSQL Workbench (Nosso gerenciador de banco de dados)
  Instale-o aqui -> https://www.mysql.com/products/workbench/

* Outras dependencias
  São outras dependências necessárias para instalação do projeto;

1.   =>  "@handlebars/allow-prototype-access"
2.   =>  "body-parser"
3.   =>  "connect-flash"
4.   =>  "express"
5.   =>  "express-handlebars"
6.   =>  "express-session"
7.   =>  "express-validator"
8.   =>  "handlebars"
9.   =>  "mariadb"
10.  =>  "md5"
11.  =>  "mysql2"
12.  =>  "nodemon"
13.  =>  "sequelize"

  
### Instalação

1. Baixe o projeto. 
2. Abra o projeto em seu editor de código-fonte desejável.
3. Após aberto, você deverá abrir o terminal em seu projeto e executar o comando `npm install`, ele instalará todas as dependências armazenadas em `package.json`.
4. Terminada a instalação, você poderá rodar o projeto utilizando `npm start`, o terminal dirá onde estará localizado o endereço local do projeto: pode ser referenciado primordialmente como `localhost:8081`.

 


<p align="right">(<a href="#top">Voltar para o início</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso
1.  Primeiro passo é iniciar os dois aplicativos, XAMPP e MYSQL Workbench. Com eles, você poderá iniciar o servidor que fará a conexão com o banco de dados, onde será armazenado nossos dados.
  No MYSQL Workbench, você deverá executar a query de criação de banco e tabelas armazenadas em `nodejsDB.sql`, assim o nosso servidor irá reconhecer o banco.
  Após iniciar e configurar esses aplicativos, você poderá executar o nosso app com o comando `npm start`, ele nos mostrará no terminal onde está o endereço local para acessa-lo.
2. Na tela de login, os dados que você cadastrar serão armazenados no banco de dados. Ao cadastrar-se e logar com os dados corretos, você entrará em nosso gerenciador de produtos, no qual você pode inserir, editar e apagar produtos.
 

1. Instalando dependências do projeto
![](https://cdn.discordapp.com/attachments/704805407906070581/983063610458787890/Desktop_2022.06.05_-_14.31.21.01_Trim.gif)

2. Inicializando o XAMPP
![](https://cdn.discordapp.com/attachments/704805407906070581/983064164975128576/Desktop-2022.06.05-14.31.21.01_Trim-_2_.gif)

3. Inicializando o MYSQL Workbench com suas queries
![](https://cdn.discordapp.com/attachments/704805407906070581/983064624301756456/Desktop-2022.06.05-14.31.21.01_Trim-_3_.gif)

4. Rodando o projeto no navegador e mostrando suas funcionalidades.

[![Projeto no Navegador](https://yt-embed.herokuapp.com/embed?v=_pbnh7DbY2c)](https://www.youtube.com/watch?v=_pbnh7DbY2c)

5. Função de administrador (gerenciar usuários)

![](https://cdn.discordapp.com/attachments/704805407906070581/983174736580325456/Desktop-2022.06.05-14.34.44.03_Trim.gif)

<p align="right">(<a href="#top">Voltar para o início</a>)</p>



## Contribuindo

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

Se você tiver uma sugestão para melhorar isso, faça um fork do repositório e crie uma solicitação pull. Você também pode simplesmente abrir um problema com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Fork o Projeto;
2. Crie sua ramificação de recursos (`git checkout -b feature/AmazingFeature`);
3. Confirme suas alterações (`git commit -m 'Add some AmazingFeature'`);
4. Dê um push para a branch (`git push origin feature/AmazingFeature`);
5. Abra uma solicitação de pull.

<p align="right">(<a href="#top">Voltar para o início</a>)</p>



<!-- LICENSE -->
## Licença

Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.

<p align="right">(<a href="#top">Voltar para o início</a>)</p>



<!-- CONTACT -->
## Contato

Matheus Dutra Souza - [@mthsdtrsz](https://twitter.com/mthsdtrsz) - matheusd67@hotmail.com

Link do Projeto: [https://github.com/MatheusSouza70/CRUD-Produtos](https://github.com/MatheusSouza70/CRUD-Produtos)

<p align="right">(<a href="#top">Voltar para o início</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Referências e Conhecimentos adicionais

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">Voltar para o início</a>)</p>




[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/MatheusSouza70/CRUD-Produtos/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/MatheusSouza70/CRUD-Produtos/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/MatheusSouza70/CRUD-Produtos/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://br.linkedin.com/in/matheus-dutra-souza-02141221a
[product-screenshot]: https://media.discordapp.net/attachments/704805407906070581/983185875007602728/unknown.png?width=590&height=480


