## Testando o projeto

Primeiro, vamos configurar o banco de dados na sua máquina. Estou utilizando o **postgresql** em um container docker.

Para criar um container com as credenciais necessárias do projeto, digite o comando `docker run --name leads -e POSTGRES_PASSWORD=admin -d -p 5432:5432 postgres`, verifique se o container está rodando com o comando `docker ps -a`.
<br>

Acesse a pasta `backend` e na raiz do projeto digite `npm install`, com as dependências instaladas digite `npx prisma migrate dev --create-only` para rodar as migrations do banco, de um nome para a migration.
<br>

Após todas as etapas acima estar devidamente configuradas, digite na raiz do projeto `backend` o comando `npm run dev`. A api vai rodar na porta **3333**.
<br>

Com a api rodando, abra outro terminal e acesse a pasta `frontend`, digite `npm install` para  baixar as dependências. Se tudo estiver devidamente instalado, acesse a raiz do projeto `frontend` e digite `npm run dev`. 

As rotas do frontend são **/leads** para visualizar as tabelas, **/cadastrar** para o formulário de criação de leads e a rota raiz **/** é para acessar a tela de criação do usuário e login, se ele é do time comercial ou do time de prospecção.
<br>

### O backend está finalizado e funcionando totalmente, as rotas são :

#### Rotas de usuário

`http://localhost:3333/user/register` - POST: para criar um usuário, deve conter os campos :
*firstName*, *lastName*, *email*, *password* e *role*.

`http://localhost:3333/user/login` - POST: para logar um usuário, deve conter os campos :
*email* e *password*.

#### Rotas de leads

`http://localhost:3333/leads/create` - POST: para criar um lead, deve conter os campos :
*companyName*, *cep*, *address*, *email*, *phone*, *contact* e o campo opicional *message* se caso desejar deixar uma mensagem. O campo **status** vem por default como *waiting*, que significa que o lead ainda não entrou em contato para marcar uma call. Assim que ele retornar, pode ser editado o valor no sistema como *reject* ou *accepted* de acordo com a resposta.

`http://localhost:3333/leads` - GET : para listar todos os leads.

`http://localhost:3333/leads/:id` - GET : para buscar um único lead por ID.

`http://localhost:3333/leads/edit/:id` - PUT : para editar um lead por ID, você pode editar todos os campos ou apenas os que preferir. Aqui é possível mudar o status do lead como citado acima.

`http://localhost:3333/leads/delete/:id` - DELETE : para deletar um lead por ID. 

### Imaginei o projeto com o seguinte diagrama :

<img src="https://i.ibb.co/z83B6BB/Captura-de-tela-de-2023-11-16-14-09-28.png" />

A idéia é centralizar todo o fluxo de contato dentro de uma aplicação Web, onde os usuários se identificaria com o email e senha. Usuários de dois setores diferentes "comercial" ou "prospect", acessando assim a página de criação de leads e as tabelas dos leads já criados para entrar em contato e alinhar a call com o cliente.
