import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Title.jsx';
import Description from '../components/Description.jsx';
import Specifications from '../components/Specifications.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (

      <div>
        <Title />
        <Description />
        <Specifications />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
