import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from '../../client/components/Description.jsx';
import Specifications from '../../client/components/Specifications.jsx';
import Header from '../../client/components/Header.jsx';
import Body from '../../client/components/Body.jsx';
import Title from '../../client/components/Title.jsx';
import sampleData from '../sample.spec/sampleData.spec.js';
import App from '../../client/src/index.jsx'

configure({ adapter: new Adapter() });

describe('test', () => {
  let obj;
  beforeEach(() => {
    obj = {};

    const data = {
      category: { name: 'ipsum', age: '14' },
      specs: {
        part_Number: 'laoreet7056',
        GTIN: 31704482802446,
      },
      product_id: 2,
      description: 'Lorem ipsum dolor sit amet',
      title: 'ipsum',
      brand: 'ipsum',
    };
  });
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div)
  })


  it('Title component is exist', () => {
    const wrapper = shallow(<Title title={sampleData.title} />);
    expect(wrapper).toHaveLength(1);
  });

  it('Title component has all titles saved', () => {
    const wrapper = shallow(<Title title={sampleData.title} />);
    const title = wrapper.state().title;
    expect(title).toEqual(sampleData.title);
  });
  });
});
