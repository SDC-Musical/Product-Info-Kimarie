import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Title.jsx';
import Description from '../components/Description.jsx';
import Specifications from '../components/Specifications.jsx';

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
    const id = window.location.pathname.substring(14) || 1;
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
      });
  }

  render() {
    const { title } = this.state;
    const { description } = this.state;
    const { brand } = this.state;
    const { specsParts } = this.state;
    const { specsGTIN } = this.state;
    const { categoryBrand } = this.state;
    return (
      <div>
        <Title title={title} />
        <Description
          description={description}
          categoryBrand={categoryBrand}
        />
        <Specifications
          specsParts={specsParts}
          specsGTIN={specsGTIN}
          brand={brand}
        />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('product-information') || document.createElement('div'));
