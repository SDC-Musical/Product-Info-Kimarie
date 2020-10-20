import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const Description = ({ description, categoryBrand }) => (
  <div>
    <ul>
      {categoryBrand.map((item, index) => (
        <Header
          categoryBrand={item}
          // eslint-disable-next-line react/no-array-index-key
          index={index}
        />
      ))}
    </ul>
    <p>{ description }</p>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  categoryBrand: PropTypes.arrayOf,
};

Description.defaultProps = {
  description: null,
  categoryBrand: null,
};
export default Description;
