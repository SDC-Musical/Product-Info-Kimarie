import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ categoryBrand, index }) => (
  <div id={index}>
    {categoryBrand}
  </div>
);

Header.propTypes = {
  categoryBrand: PropTypes.string,
  index: PropTypes.string,
};

Header.defaultProps = {
  categoryBrand: null,
  index: null,
};
export default Header;
