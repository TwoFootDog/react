import React from 'react';
import logo from './logo.svg';
import ReactTableComponent from './ReactTableComponent';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <span>
      <div className="App">
        <h1>리액트 프로젝트</h1>
      </div>
      <div className="DivButton" style={{padding:'1rem'}}>
        <button className="btn btn-primary" style="padding:10px;">ReactTableButton</button>
        <button className="btn btn-danger">MaterialTableButton</button>
        <button className="btn btn-warning">BootStrapTableButton</button>
      </div>
      <div>
          <ReactTableComponent />
      </div>
    </span>
  );
}

export default App;
