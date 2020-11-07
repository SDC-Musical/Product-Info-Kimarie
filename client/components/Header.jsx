import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ categoryBrand }) => (
  <div>
    <ul>
      {categoryBrand}
    </ul>
  </div>
);

Header.propTypes = {
  categoryBrand: PropTypes.string,

};

Header.defaultProps = {
  categoryBrand: null,

};
export default Header;
