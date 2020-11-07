import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const DescriptionItemStyle = styled.ul`

  padding-top: 20px;
`;
const DescriptionListStyle = styled.li`
  display: inline;
`;

const DescriptionStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 16 px;
  color: #A9A9A9;
`;

// class Description extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//     <DescriptionItemStyle>

//       {categoryBrand.map((item, index) => (
//         <DescriptionListStyle>
//           <Header
//             categoryBrand={item}
//           // eslint-disable-next-line react/no-array-index-key
//             key={index}
//           />
//         </DescriptionListStyle>
//       ))}

//     </DescriptionItemStyle>
//     <DescriptionStyle>{ description }</DescriptionStyle>
//   </div>
//     )
//   }
// }
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
    <DescriptionStyle>{ description }</DescriptionStyle>
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
