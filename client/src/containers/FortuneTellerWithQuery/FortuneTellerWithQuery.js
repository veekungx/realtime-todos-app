import { withState, compose } from 'recompose';
import { graphql } from 'react-apollo';
import FortuneTeller from '../../components/FortuneTeller/FortuneTeller';
import FortuneTellerQuery from './FortuneTellerWithQuery.query.gql';

const queryOptions = {
  options: { pollInterval: 15000 },
  props: ({ data: { loading, error, fortune } }) => {
    if (loading) return true;
    if (error) return new Error(error);
    return { fortune };
  },
};

export default compose(
  withState('isOpen', 'onRequestClose', true),
  graphql(FortuneTellerQuery, queryOptions),
)(FortuneTeller);
