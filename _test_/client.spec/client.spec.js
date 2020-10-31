import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';
import Description from '../../client/components/Description.jsx';
import Specifications from '../../client/components/Specifications.jsx';
import Header from '../../client/components/Header.jsx';
import Body from '../../client/components/Body.jsx';
import Title from '../../client/components/Title.jsx';
import sampleData from '../sample.spec/sampleData.spec.js';
import App from '../../client/src/index.jsx';

configure({ adapter: new Adapter() });

describe('<Title>', () => {
  it('should have a title and totla reviews', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for title and TotalReviews', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.props().title).to.be.defined;
    expect(wrapper.props().TotalReviews).to.be.defined;
  });
});

describe('<Description>', () => {
  it('contains an <Header/> component', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('should have props for description and categoryBrand', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.props().description).to.be.defined;
    expect(wrapper.props().categoryBrand).to.be.defined;
  });
});

describe('<Specifications >', () => {
  it('contains an <Body/> component', () => {
    const wrapper = mount(<Specifications />);
    expect(wrapper.find(Body)).to.have.length(1);
  });

  it('contains an <Body/> component', () => {
    const wrapper = mount(<Specifications />);
    expect(wrapper.find(Body)).to.have.length(1);
  });

  it('should have an initial email state', () => {
    const wrapper = mount(<Specifications />);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });
});
