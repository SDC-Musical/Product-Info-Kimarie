import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const DescriptionItemStyle = styled.ul`
list-style-type: none;
margin: 0;
padding: 5px ;
`;
const DescriptionListStyle = styled.li`
float: left;
padding-right: 10px;
`;

const DescriptionStyle = styled.div`
margin: 30px 0px 10px 0px;
`;
const StyledMore = styled.a`
display: none;
`;

const StyledDots = styled.a`
padding-left: 10px;
`;

const Description = ({ description, categoryBrand }) => (
  <div>
    <DescriptionItemStyle>

      {categoryBrand.map((item, index) => (
        <DescriptionListStyle>
          <Header
            categoryBrand={item}
          // eslint-disable-next-line react/no-array-index-key
            index={index}
          />
        </DescriptionListStyle>
      ))}

    </DescriptionItemStyle>
    <span />
    <DescriptionStyle>
      { description }
      <StyledDots>
        more...
      </StyledDots>
      <StyledMore>
        {' '}
        { description }
        {' '}
      </StyledMore>
    </DescriptionStyle>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  categoryBrand: PropTypes.arrayOf(PropTypes.string),
};

Description.defaultProps = {
  description: null,
  categoryBrand: null,
};

export default Description;
