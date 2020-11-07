import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Title from '../components/Title.jsx';
import Description from '../components/Description.jsx';
import Specifications from '../components/Specifications.jsx';
import staticObj from './Static.js';

const Wrapper = styled.div`
  color: #222;
  font-family: 'Roboto', arial, sans-serif;
  min-width: 914px;
  max-width: 1024px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      specsParts: '',
      specsGTIN: 0,
      brand: '',
      categoryBrand: [],
      TotalReviews: 0,
    };
  }

  componentDidMount() {
    // const API_URL = process.env.API_URL || 'localhost';
    // const API_REQUEST = process.env.API_REQUEST || 'localhost';
    console.log(API_REQUEST);
    console.log(API_URL);
    let id = window.location.pathname.substring(10) || '1';
    id = id.replace('/', '');
    fetch(`http://3.138.189.215:3004/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const containerObj = data.category;
        containerObj.brand = data.brand;
        const categoryBrand = Object.values(containerObj);
        const specsParts = data.specs.part_Number;
        const specsGTIN = data.specs.GTIN;
        this.setState({
          title: data.title || '',
          description: data.description || '',
          brand: data.brand || '',
          categoryBrand: categoryBrand || [],
          specsParts: specsParts || '',
          specsGTIN: specsGTIN || 0,
        });
      })
      .catch((err) => {
        console.log('Unable to complete request: ', err);
        const data = staticObj[id - 1];
        const containerObj = data.category;
        containerObj.brand = data.brand;
        const categoryBrand = Object.values(containerObj);
        const specsParts = data.specs.part_Number;
        const specsGTIN = data.specs.GTIN;
        this.setState({
          title: data.title,
          description: data.description,
          brand: data.brand,
          categoryBrand,
          specsParts,
          specsGTIN,
        });
      });
    fetch(`http://18.222.37.28:3001/api/reviews/${id}`)
      .then((response) => (response.json()))
      .then((data) => {
        this.setState({
          TotalReviews: data.length || 0,
        });
      });
  }

  render() {
    const {
      title, description, brand, specsParts, specsGTIN, categoryBrand, TotalReviews,
    } = this.state;
    return (
      <Wrapper>
        <div>
          <Title title={title} TotalReviews={TotalReviews} />
        </div>
        <div>
          <Description
            description={description}
            categoryBrand={categoryBrand}
          />
        </div>
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
// separate div elements for each component
ReactDOM.render(<App />, document.getElementById('product-information') || document.createElement('div'));
