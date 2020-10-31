import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SpecTableStyle = styled.div`
display:  table;
border-spacing:5px;
`;
const RowItemStyle = styled.div`
  display:table-row;
  font-size: 16px;
  font-weight: normal;
  text-transform: capitalize;
  border-bottom: 1px #A9A9A9 solid;

`;
const CellItemStyle1 = styled.div`
  display: table-column;
  float: left;
  width: 200px
  font-size: 16px;
  margin: 34px 20px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;
const CellItemStyle2 = styled.div`
  display: table-column;
  float: left;
  font-size: 16px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
  color: #A9A9A9;
`;
const BottomBorderStyle = styled.p`
margin-left: -10px
color: #A9A9A9;
border-top: 1px #A9A9A9 solid;
width: 100%
`;

/*
color: #A9A9A9;
border-bottom: 1px #A9A9A9 solid;
*/
const Body = ({ specsParts, specsGTIN, brand }) => (

  <SpecTableStyle>
    <RowItemStyle>
      <CellItemStyle1>
        Brand
      </CellItemStyle1>

      <CellItemStyle2>
        {brand}
      </CellItemStyle2>

    </RowItemStyle>
    <BottomBorderStyle />

    <RowItemStyle>
      <CellItemStyle1>
        PartNumbers
      </CellItemStyle1>

      <CellItemStyle2>
        {specsParts}
      </CellItemStyle2>
    </RowItemStyle>
    <BottomBorderStyle />

    <RowItemStyle>
      <CellItemStyle1>
        GTIN
      </CellItemStyle1>

      <CellItemStyle2>
        {specsGTIN}
      </CellItemStyle2>
    </RowItemStyle>

    <BottomBorderStyle />
  </SpecTableStyle>
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
