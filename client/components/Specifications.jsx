import React from 'react';
import PropTypes from 'prop-types';

const Specifications = ({ specsParts, specsGTIN, brand }) => (
  <div>
    <h1>Specifications</h1>
    <h2>Universal Product Identifiers</h2>
    <tr>
      <td>
        {' '}
        Brand
        {' '}
        {brand}
        {' '}
      </td>
      <td>
        {' '}
        PartNumbers
        {' '}
        {specsParts}
        {' '}
      </td>
      <td>
        {' '}
        GTIN
        {' '}
        {specsGTIN}
        {' '}
      </td>
    </tr>
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
