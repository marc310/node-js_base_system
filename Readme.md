aplicativo de teste em nodeJs
desenvolvimento de estudo da estrutura MVC


//-----------------------------------------------------------------------------//

>> npm install express-generator -g

inicio do desenvolvimento com express framework

>> express --view=ejs /*nome do app*/

//-----------------------------------------------------------------------------//

mudando estrutura de pastas MVC

>> app
>>> controller
>>> models
>>> views
>>> routes

ajustada a rota no app.js

//-----------------------------------------------------------------------------//

nodemon instalado para facilitar o desenvolvimento

>> npm install nodemon -g

execute o projeto utilizando o nodemon use:

>> nodemon

ao inves de
>> npm start

//-----------------------------------------------------------------------------//

adicionando jshint e mysql ao package.json

>> npm install

testes pelo jshint sendo configurados no package.json

>> npm run-script jshint

//-----------------------------------------------------------------------------//

iniciando desenvolvimento TDD com Jasmine

adicionado ao package.json

>> npm run-script testUsuarioModel
