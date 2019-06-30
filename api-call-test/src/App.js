import React from 'react';
import { Route } from 'react-router-dom';
import About from './Layout/About';
import TabButtonComponent from './Component/TabButtonComponent';
import TableLayout from './Layout/TableLayout';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <div className="App">
          <h1>리액트 테스트 프로젝트</h1>
        </div>
        <div>
          <TabButtonComponent/>
        </div>
        <div align="center">
          <Route exact path="/" component={TableLayout} />
          <Route path="/about" component={About} />
        </div>
      </span>
    );
  }
}

export default App;
