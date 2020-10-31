import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Title.jsx';
import Description from '../components/Description.jsx';
import Specifications from '../components/Specifications.jsx';
import staticObj from './Static.js';

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
    };
  }

  componentDidMount() {
    let id = window.location.pathname.substring(10) || '1';
    id = id.replace('/', '');
    fetch(`http://localhost:3004/api/products/${id}`)
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
    fetch(`http://localhost:3001/api/reviews/${id}?limit=1`)
      .then((response) => console.log(response.json()))
      .then((data) => {
        //console.log(data);
      });
  }

  render() {
    const {
      title, description, brand, specsParts, specsGTIN, categoryBrand,
    } = this.state;
    return (
      <div>
        <div>
          <Title title={title} />
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

      </div>

    );
  }
}
// separate div elements for each component
ReactDOM.render(<App />, document.getElementById('product-information') || document.createElement('div'));
