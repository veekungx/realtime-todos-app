import { withState, compose } from 'recompose';
import { graphql, gql } from 'react-apollo';
import FortuneTeller from '../../components/FortuneTeller/FortuneTeller';
import FortuneTellerQuery from './FortuneTellerWithQuery.query.gql';

const queryOptions = {
  options: { pollInterval: 15000 },
  props: ({ data, data: { loading, error, fortune } }) => {
    if (loading) return
    if (error) return
    return { fortune }
  }
};

export default compose(
  withState('isOpen', 'onRequestClose', true),
  graphql(FortuneTellerQuery, queryOptions)
)(FortuneTeller);