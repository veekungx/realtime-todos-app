import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withState, lifecycle, compose } from 'recompose';
import { graphql, gql } from 'react-apollo';
import { bool, func } from 'prop-types';

import './FortuneTeller.scss';

const FortuneTeller =
  ({
    // props
    fortune,
    isOpen,

    //events
    onRequestClose
  }) => (
      <div className="FortuneTeller">
        {isOpen}
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isOpen}
          onRequestClose={() => {
            onRequestClose(() => false)
          }}
          autoHideDuration={5000}
          message={fortune}
        />
      </div>
    );

FortuneTeller.propTypes = {
  isOpen: bool,
  onRequestClose: func,
};

FortuneTeller.defaultProps = {
  isOpen: false,
  onRequestClose: undefined,
};

export default FortuneTeller;


const query = gql`
   query{
     fortune
   }
`;

const queryOptions = {
  options: { pollInterval: 15000 },
  props: ({ data, data: { loading, error, fortune } }) => {
    if (loading) return
    if (error) return
    return { fortune }
  }
};

export const FortuneTellerWithQuery = compose(
  withState('isOpen', 'onRequestClose', true),
  graphql(query, queryOptions)
)(FortuneTeller);