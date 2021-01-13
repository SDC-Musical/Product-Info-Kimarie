import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Description from '../components/Description.jsx';
import staticObj from './Static.js';

const Wrapper = styled.div`
  color: #222;
  font-family: 'Roboto', arial, sans-serif;
  width: 50%;
  height: 10vw;
`;

class DescriptionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      categoryBrand: [],
    };
  }

  componentDidMount() {
    // const API_URL = process.env.API_URL || 'localhost:3004';
    // const API_REQUEST = process.env.API_REQUEST || 'localhost:3001';
    /*
    let id = window.location.pathname.substring(10) || '1';
    id = id.replace('/', '');
    */
    let id;
    if (window.location.pathname === '/') {
      id = 1;
    } else {
      id = window.location.pathname.slice(1);
    }
    console.log('description id:', id);

    if (id < 1 || id > 10000000 || !id) {
      console.log('Unable to complete request. Product number out of range!');
      const data = staticObj[0];
      this.setState({
        title: data.title,
      });
    } else {
      fetch(`http://18.144.74.123/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          let categoryBrand = [];
          categoryBrand.push(data.category_name, data.age_category, data.player_Count, data.brand);

          this.setState({
            description: data.description || '',
            categoryBrand: categoryBrand || [],
          });
        })
        .catch((err) => {
          console.log('Unable to complete request: ', err);
          const data = staticObj[1];
          let categoryBrand = [];
          categoryBrand.push(data.category_name, data.age_category, data.player_Count, data.brand);

          this.setState({
            description: data.description,
            categoryBrand,
          });
        });
      }
  }

  render() {
    const { description, categoryBrand } = this.state;
    return (
      <Wrapper>
        <div>
          <Description
            description={description}
            categoryBrand={categoryBrand}
          />
        </div>
      </Wrapper>

    );
  }
}

ReactDOM.render(<DescriptionApp />, document.getElementById('description'));
