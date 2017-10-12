import { createNetworkInterface, ApolloClient } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  default as todoReducer,
  todoEpic
} from './features/todo/reducer';

const epicMiddleware = createEpicMiddleware(todoEpic);

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
})

const wsClient = new SubscriptionClient('ws://localhost:4000/subscriptions', {
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
