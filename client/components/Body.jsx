import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ specsParts, specsGTIN, brand }) => (
  <table>
    <tr>
      <td>
        Brand
        {brand}
      </td>
      <td>
        PartNumbers
        {specsParts}
      </td>
      <td>
        GTIN
        {specsGTIN}
      </td>
    </tr>
  </table>
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
