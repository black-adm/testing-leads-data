## Testando o projeto

Acesse a pasta `backend` e na raiz do projeto digite `npm install`, com as dependências instaladas digite `npx prisma migrate dev` para rodar as migrations do banco.
<br/>

Estou utilizando o **postgresql** como banco de dados em um container docker. Para criar um container com as credenciais necessárias para o projeto, digite o comando `docker run --name leads -e POSTGRES_PASSWORD=admin -d -p 5432:5432 postgres`, verifique se o container está rodando com o comando `docker ps -a`.

Após todas as etapas acima estar devidamente configuradas, digite na raiz do projeto `backend` o comando `npm run dev`. A Api vai rodar na porta **3333**.
<br>

Com a Api rodando, abra outro terminal e acesse a pasta `frontend`, digite `npm install` para  baixar as dependências. Com tudo instalado, acesse a raiz do projeto `frontend` e digite `npm run dev`. As rotas do frontend são */admin* para visualizar as tabelas, */leads* para o formulário de criação de leads e a rota `/` para acessar a tela de verificação do usuário, se ele é do time comercial ou do time de prospecção.
<br>

Infelizmente eu quis fazer um projeto bem completo e o frontend não foi concluido totalmente, desde já agradeço a atençao e a oportunidade e aguardo um retorno.

<br>
O backend está finalizado e funcionando totalmente, as rotas são :



*http://localhost:3333/leads/user* - POST: para criar um usuário, deve conter os campos :
*email* e *role*

*http://localhost:3333/leads* - POST: para criar um lead, deve conter os campos :
*companyName*, *cep*, *address*, *email*, *phone*, *contact* e o campo opicional *message*

*http://localhost:3333/leads* - GET : para listar todos os leads 

Imaginei o projeto com o seguinte diagrama :

<img src="https://i.ibb.co/z83B6BB/Captura-de-tela-de-2023-11-16-14-09-28.png" />


A idéia era centralizar todo o fluxo dentro de uma aplicação Web onde o usuário se identificaria com o email e o setor "comercial" ou "prospect", acessando assim a página de criação de leads e as tabelas dos leads já criados para entrar em contato e alinhar a call com o cliente.
