import React from 'react';
import logo from './logo.svg';
import ReactTableComponent from './Component/ReactTableComponent';
import MaterialTableComponent from './Component/MaterialTableComponent';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    tableFlag: 1  // 1: reactTable, 2: MaterialTable, 3: BootstrapTable
  };

  reactTableButtonClick = () => {
    console.log('reactTableButtonClick');
    this.setState({
      tableFlag: 1
    });
  }

  MaterialTableButtonClick = () => {
    console.log('MaterialTableButtonClick');
    this.setState({
      tableFlag: 2
    });
  }

  BootStrapTableButtonClick = () => {
    console.log('BootStrapTableButtonClick');
    this.setState({
      tableFlag: 3
    });
  }

  render() {
    const TableComponent = () => {
      if (this.state.tableFlag === 1) {
        return (
          <ReactTableComponent />
        )
      } else if (this.state.tableFlag === 2) {
        return (
          <MaterialTableComponent />
        )
      } else if (this.state.tableFlag === 3) {

      }
    }
    return (
      <span>
        <div className="App">
          <h1>리액트 프로젝트</h1>
        </div>
        <div style={{padding: '20px'}}>
          <button className="btn btn-primary" style={{marginRight:'1rem'}} onClick={this.reactTableButtonClick}>ReactTableButton</button>
          <button className="btn btn-danger" style={{marginRight:'1rem'}} onClick={this.MaterialTableButtonClick}>MaterialTableButton</button>
          <button className="btn btn-warning" style={{marginRight:'20px'}} onClick={this.BootStrapTableButtonClick}>BootStrapTableButton</button>
        </div>
        <div>
            <TableComponent />
        </div>
      </span>
    );
  }
}

export default App;
