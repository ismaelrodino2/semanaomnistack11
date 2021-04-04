const express = require('express');
const cors = require('cors');//importa o cors
const routes = require('./routes')

const app = express(); 

app.use(cors());//--> so de fazer isso, no desenvolvimento todas aplicações frontend poderão acessar esse backend//quando for colocar no ar colocar entre parâmetros ({origin:'endereço_do_site'})
app.use(express.json());
app.use(routes);


//rota/recurso
//rota = conjunto completo
//recurso = algo para buscar na rota

/*
métodos http:

get: buscar/listar informação}
-> utilizado em /users por exemplo

post: criar informação }   no backend 
-> utilizando app.post('/recurso')->insomnia retorna texto

put: alterar informação}

delete: deletar informação}

->para utilizar put e delete usa app.put e app.delete.
*/

/*
tipos de parâmetros:

query: ->usar get ->enviado na rota para filtrar parâmetros ->exemplo: app.get('/users?ismael') -> listar(get) usuários(query->após '?') de nome ismael

request -> dados requeridos pelo usuário no insomnia
response -> returnar resposta para o usuário
 ->ex: app.get... const params = request.query; -> acessar todos parametros q vem através dos query;console.log(params)->mostrar no visual; o insomnia tá -> ...3333/users?name=ismael e no visual studio aparece name:ismael, ou seja, mandei um dado pelo insomnia e apareceu no terminal do visual

route: ->utilizado para identificar um único recurso ->método get ->ex: um único usuário: users/:id e no insomnia localhost:3333/users/1 lista usuário de id 1
ex: /users/:id;    const params = request.params;-> acessar id com request params ->no indomnia: http://localhost:3333/users/1; me retorna id:'1', ou seja, enviei o nome de id =1 pelo insomnia como parâmetro e me foi retornado no console.log, PORÉM N PODE ENVIAR PARÂMETROAS A MAIS DO QUE ESTÁ SENDO ESPERADO (NESSE CASO :ID)

request body: corpo da requisição -> criar/alterar recursos -> método post -> usa body agora, no insomnia coloca nome e idade -> informa formato json -> retornano terminal o que foi passado no insomnia (nome e idade)
*/

//nodemon = usar para desenvolver, em package.json start coloca nodemon index.js, no terminal npm start

/* bancos de dados:
sql: mysql, sqlite,...
nosql: mongodb, couchdb...

vamos usar sqlite pq n precisamos instalar nada

**
*driver: SELECT * FROM users
*Query Builder: table('users).select('*').where() -> usar knex
*/ 

/*
em src coloca tudo feito por nós
em routes.js colocar as rotas
*/

//entidades: ong, casos (incident)


app.listen(3333);