import React from 'react';
import { Route } from 'react-router-dom';
import TopNavBarComponent from './Component/TopNavBarComponent';
import Home from './Layout/Home';
import TableLayout from './Layout/TableLayout';
import Etc from './Layout/Etc';
import About from './Layout/About';


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
          <TopNavBarComponent/>
        </div>
        <div align="center">
          <Route exact path="/" component={Home} />
          <Route exact path="/tables" component={TableLayout} />
          <Route path="/Etc" component={Etc} />
          <Route path="/about" component={About} />
        </div>
      </span>
    );
  }
}

export default App;
