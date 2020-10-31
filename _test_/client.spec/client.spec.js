import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from '../../client/components/Description.jsx';
import Specifications from '../../client/components/Specifications.jsx';
import Header from '../../client/components/Header.jsx';
import Body from '../../client/components/Body.jsx';
import Title from '../../client/components/Title.jsx';
import sampleData from '../sample.spec/sampleData.spec.js';
import App from '../../client/src/index.jsx';
import { expect } from 'chai';
import sinon from 'sinon';


configure({ adapter: new Adapter() });



