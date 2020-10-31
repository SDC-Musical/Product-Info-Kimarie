import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyle = styled.p`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;
const ReviewStyle = styled.p`
font-size: 16px;
color: #A9A9A9;
`;
const Title = ({ title, TotalReviews }) => (
  <TitleStyle>
    {' '}
    {title}
    <ReviewStyle>
      (
      {TotalReviews}
      )
    </ReviewStyle>
  </TitleStyle>
);

Title.propTypes = {
  title: PropTypes.string,
  TotalReviews: PropTypes.number,
};
Title.defaultProps = {
  title: null,
  TotalReviews: null,
};
export default Title;
