import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyle = styled.div`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;
const ReviewStyle = styled.p`
display: inline-block;
float: left;
font-size: 16px;
color: #A9A9A9;

`;
const StyledStarContainer = styled.div`
  align-items: left;
  background: #0000;
  display: flex;
  height: 20px;
  justify-content: left;
`;
const StyledStars = styled.div`

  background: #cf9c30;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 20px;
  width: 20px;
`;

const Title = ({ title, TotalReviews, AverageRating }) => (
  <TitleStyle>
    {' '}
    {title}

    <StyledStarContainer>
      <ReviewStyle>
        <StyledStars />
        <StyledStars />
        <StyledStars />
        <StyledStars />
        <StyledStars />
        (
        {TotalReviews}
        )
      </ReviewStyle>
    </StyledStarContainer>
  </TitleStyle>

);

Title.propTypes = {
  title: PropTypes.string,
  TotalReviews: PropTypes.number,
  AverageRating: PropTypes.number,
};
Title.defaultProps = {
  title: null,
  TotalReviews: null,
  AverageRating: null,
};
export default Title;
