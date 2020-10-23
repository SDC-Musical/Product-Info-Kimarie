import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body.jsx';

const Specifications = ({ specsParts, specsGTIN, brand }) => (
  <div>
    <h1>Specifications</h1>
    <h2>Universal Product Identifiers</h2>
    <Body
      specsParts={specsParts}
      specsGTIN={specsGTIN}
      brand={brand}
    />
  </div>
);

Specifications.propTypes = {
  specsParts: PropTypes.string,
  specsGTIN: PropTypes.number,
  brand: PropTypes.string,
};

Specifications.defaultProps = {
  specsParts: null,
  specsGTIN: null,
  brand: null,
};
export default Specifications;
