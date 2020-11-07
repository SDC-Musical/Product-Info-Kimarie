import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizingDescription = styled.ul`
  display: flex;
  margin-block-end: 90px;
  margin-inline-end: 90px;
`;

const Header = ({ categoryBrand }) => (
  <div>
    <SizingDescription>
      {categoryBrand}
    </SizingDescription>
  </div>
);

Header.propTypes = {
  categoryBrand: PropTypes.string,

};

Header.defaultProps = {
  categoryBrand: null,

};
export default Header;
