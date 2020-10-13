import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Description from './components/Description';
import Specifications from './components/Specifications';

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
