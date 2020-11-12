import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Body from './Body.jsx';

const SpecHeadStyle = styled.p`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;

const SpecBodyStyle = styled.p`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
  color: #A9A9A9;
  border-bottom: 1px #A9A9A9 solid;
`;

const Specifications = ({ specsParts, specsGTIN, brand }) => (
  <div>
    <SpecHeadStyle>Specifications</SpecHeadStyle>
    <SpecBodyStyle>Universal Product Identifiers</SpecBodyStyle>
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
