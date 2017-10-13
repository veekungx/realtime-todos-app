import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { string, bool, func } from 'prop-types';

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
  fortune: string,
  onRequestClose: func,
};

FortuneTeller.defaultProps = {
  isOpen: false,
  fortune: "",
  onRequestClose: undefined,
};

export default FortuneTeller;

