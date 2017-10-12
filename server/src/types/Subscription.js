const { withFilter } = require('graphql-subscriptions')
const pubsub = require('../pubsub');

const SubscriptionSchema = `
  type Subscription{
    todoAdded: Todo
  }
`;

const SubscriptionResolver = {
  Subscription: {
    todoAdded: {
      subscribe: () => pubsub.asyncIterator('todoAdded'),
    }
  }
}

module.exports = {
  SubscriptionSchema,
  SubscriptionResolver,
}