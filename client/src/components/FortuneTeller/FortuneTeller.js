import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withState, compose } from 'recompose';
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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isOpen}
          onRequestClose={onRequestClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
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

export const FortuneTellerWithQuery = compose(
  graphql(query, {
    prop: ({ data: { loading, error, fortune } }) => {
      if (loading) return
      if (error) return
      return { fortune }
    }
  })
)(FortuneTeller);