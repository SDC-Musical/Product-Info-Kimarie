import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ specsParts, specsGTIN, brand }) => (

  <div>
    <ul>
      Brand
      {' '}
      {brand}
    </ul>
    <ul>
      PartNumbers
      {' '}
      {specsParts}
    </ul>
    <ul>
      GTIN
      {' '}
      {specsGTIN}
    </ul>

  </div>
);

Body.propTypes = {
  specsParts: PropTypes.string,
  specsGTIN: PropTypes.number,
  brand: PropTypes.string,
};

Body.defaultProps = {
  specsParts: null,
  specsGTIN: null,
  brand: null,
};
export default Body;
