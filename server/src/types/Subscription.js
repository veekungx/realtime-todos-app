const pubsub = require('../pubsub');

const SubscriptionSchema = `
  
  enum ModelMutation {
    CREATED
    UPDATED
    DELETED
  }

  input  LinkSubscriptionFilter {
    mutation_in: [ModelMutation!]
  }

  type LinkSubscriptionPayload {
    mutation: _ModelMutationType!
    node: Link
  }

  type Subscription{
    Todo(filter: LinkSubscriptionFilter): LinkSubscriptionPayload
  }
`;


const SubscriptionResolver = {
  Todo: () => pubsub.asyncIterator('Todo'),
}