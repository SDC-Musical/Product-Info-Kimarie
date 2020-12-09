import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Specifications from '../components/Specifications.jsx';
import staticObj from './Static.js';

const Wrapper = styled.div`
  color: #222;
  font-family: 'Roboto', arial, sans-serif;
  width: 50%;
  height: 5vw;
  margin-top: 100px;
`;

class SpecsApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      specsParts: '',
      specsGTIN: 0,
      brand: '',
    };
  }

  componentDidMount() {
    //Temporary change for local host
    // const API_URL = process.env.API_URL || 'localhost:3004';
    // const API_REQUEST = process.env.API_REQUEST || 'localhost:3001';

    /*
    let id = window.location.pathname.substring(10) || '1';
    id = id.replace('/', '');

    fetch(`http://3.138.189.215/api/products/${id}`)
    */
    let id;
    if (window.location.pathname === '/') {
      id = 1;
    } else {
      id = window.location.pathname.slice(1);
    }

    fetch(`http://localhost:3004/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          brand: data.brand || '',
          specsParts: data.part_Number || '',
          specsGTIN: data.GTIN || 0,
        });
      })
      .catch((err) => {
        console.log('Unable to complete request: ', err);
        const data = staticObj[id - 1];
        const specsParts = data.part_Number;
        const specsGTIN = data.GTIN;

        this.setState({
          brand: data.brand,
          specsParts,
          specsGTIN,
        });
      });
  }

  render() {
    const { brand, specsParts, specsGTIN } = this.state;
    return (
      <Wrapper>
        <div>
          <Specifications
            specsParts={specsParts}
            specsGTIN={specsGTIN}
            brand={brand}
          />
        </div>

      </Wrapper>

    );
  }
}

ReactDOM.render(<SpecsApp />, document.getElementById('specs') || document.createElement('div'));
