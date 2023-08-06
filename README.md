# Desafio Nginx com Node.js 😎

O desafio Nginx com Node.js foi incrível e me permitiu aplicar os conhecimentos aprendidos sobre o uso do Nginx como proxy reverso. A ideia principal era quando um usuário acessasse o Nginx, este faria uma chamada para a aplicação Node.js. A aplicação, por sua vez, adicionaria um registro no nosso banco de dados MySQL, cadastrando um nome na tabela "people".

O retorno esperado da aplicação Node.js para o Nginx era simples e direto:
`<h1>Full Cycle Rocks!</h1>`

Além disso, a lista de nomes cadastrados no banco de dados também deveria ser exibida.

Para resolver o desafio, comecei criando o Docker Compose de forma eficiente, garantindo que, ao executar o comando `docker-compose up -d`, tudo estaria funcionando e disponível na porta 8080, como solicitado.

A linguagem de programação utilizada para este desafio foi Node/JavaScript, o que me permitiu criar a aplicação Node.js para lidar com as requisições do Nginx e interagir com o banco de dados MySQL.

Foi gratificante ver tudo funcionando perfeitamente após o deploy, com o Nginx atuando como proxy reverso e a aplicação Node.js cadastrando os nomes na tabela "people".

Definitivamente, este desafio me proporcionou uma experiência valiosa de aprendizado, fortalecendo meu conhecimento em Nginx, Node.js e Docker, e me motivando a buscar mais desafios para continuar crescendo na área de desenvolvimento. Estou ansioso para encarar novos projetos e seguir a jornada Full Cycle! 💪
