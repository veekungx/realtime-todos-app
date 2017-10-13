import { createNetworkInterface, ApolloClient } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  todoReducer,
  todoEpic
} from './features/todo/reducer';

const socketUri = process.env.REACT_APP_SOCKET_URI;
const graphqlUri = process.env.REACT_APP_GRAPHQL_URI;
const epicMiddleware = createEpicMiddleware(todoEpic);
const networkInterface = createNetworkInterface({
  uri: graphqlUri,
})

const wsClient = new SubscriptionClient(`${socketUri}/subscriptions`, {
  reconnect: true,
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
})

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    apollo: client.reducer()
  }),
  {},
  compose(
    applyMiddleware(
      client.middleware(),
      epicMiddleware
    ),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
)
