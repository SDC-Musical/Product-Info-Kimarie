import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyle = styled.div`
  font-size: 20px;
  margin: 34px 0px 0px 0px;
  font-weight: normal;
  text-transform: capitalize;
`;
const ReviewStyle = styled.p`
font-size: 16px;
color: #A9A9A9;
`;

// class Title extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <TitleStyle>
//         {' '}
//         {this.props.title}
//         <ReviewStyle>
//           (
//           {this.props.TotalReviews}
//           )
//         </ReviewStyle>
//       </TitleStyle>
//     );
//   }
// }
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
