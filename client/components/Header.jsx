import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DescriptionHeadStyle = styled.div`
  font-size: 16px;
  display: table;
  margin: 0 auto;
  font-weight: normal;
  text-transform: capitalize;
`;
const Header = ({ categoryBrand }) => (
  <DescriptionHeadStyle>
    {categoryBrand}
  </DescriptionHeadStyle>
);

Header.propTypes = {
  categoryBrand: PropTypes.string,
};

Header.defaultProps = {
  categoryBrand: null,
};
export default Header;
