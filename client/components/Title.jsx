import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyle = styled.p`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;
const Title = ({ title }) => (
  <TitleStyle>
    {' '}
    {title}
  </TitleStyle>
);

Title.propTypes = {
  title: PropTypes.string,
};
Title.defaultProps = {
  title: null,
};
export default Title;
