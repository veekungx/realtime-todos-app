### This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project represent my current developement skills, my workflow, TDD, unit test, GraphQL, React Storybooks

Original example todos app link

http://todomvc.com/examples/react/

[Trello](https://trello.com/b/LcBgIGJt/real-time-todo-application) - Planning


[Storybook](https://todos-storybook.now.sh) - The design of components

[GraphQL api & document](https://todos-server.now.sh/graphiql?query=query%20AllTodos%7B%0A%20%20todos%7B%0A%20%20%20%20totalCount%0A%20%20%20%20edges%7B%0A%20%20%20%20%20%20node%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20state%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20FilterCompletedTodos%7B%0A%20%20todos(state%3ATODO_COMPLETED)%7B%0A%20%20%20%20totalCount%0A%20%20%20%20edges%7B%0A%20%20%20%20%20%20node%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20state%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20PaginateTodos%7B%0A%20%20todos(first%3A3)%7B%0A%20%20%20%20totalCount%0A%20%20%20%20edges%7B%0A%20%20%20%20%20%20node%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20state%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20SearchTodos%7B%0A%20%20todos(search%3A%22ele%22)%7B%0A%20%20%20%20totalCount%0A%20%20%20%20edges%7B%0A%20%20%20%20%20%20node%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20state%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=SearchTodos) - Better and modern than REST

[Demo](https://todos-client.now.sh) - Try it!!

#### Basic features
- **[DONE]** Add new todos

<img src="https://todos-server.now.sh/public/AddTodo.gif" width="320">

- **[DONE]** Delete todos

<img src="https://todos-server.now.sh/public/RemoveTodo.gif" width="320">

- **[DONE]** Mark completed todos

<img src="https://todos-server.now.sh/public/ToggleTodo.gif" width="320">


- **[DONE]** Filter all todos, active todos, completed todos

<img src="https://todos-server.now.sh/public/FilterTodo.gif" width="320">


- **[DONE]** Count todos

#### What's I'm going to extends
- [DONE] Realtime todos application

<img src="https://todos-server.now.sh/public/RealtimeTodo.gif" width="640">


- **[DONE]** Search on todos

<img src="https://todos-server.now.sh/public/SearchTodo.gif" width="320">

- **[DONE]** GraphQL service for better REST API
- **[DONE]** Persistent data to MongoDB
- **[DONE]** Motion animation
- **[PROGRESS]** Pagination
- **[BUG]** Fortune telling when you are working on todos app

#### Test
<img src="https://todos-server.now.sh/public/test.png" width="100%">

#### Coverage
<img src="https://todos-server.now.sh/public/coverage.png" width="100%">

