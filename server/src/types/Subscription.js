const { withFilter } = require('graphql-subscriptions')
const pubsub = require('../pubsub');

const SubscriptionSchema = `
  enum ModelMutation {
    CREATED
    UPDATED
    DELETED
  }

  input TodoSubscriptionFilter{
    mutation_in: [ModelMutation] 
  }

  type TodoSubscriptionPayload {
    mutation: ModelMutation!
    node: Todo
    edge: TodoEdge
  }

  type Subscription{
    Todo(filter: TodoSubscriptionFilter): TodoSubscriptionPayload
    todoAdded: Todo
    todoRemove: Todo
  }
`;

const SubscriptionResolver = {
  Subscription: {
    Todo: {
      subscribe: () => pubsub.asyncIterator('Todo'),
    },
    todoAdded: {
      subscribe: () => pubsub.asyncIterator('todoAdded'),
    }
  }
}

module.exports = {
  SubscriptionSchema,
  SubscriptionResolver,
}