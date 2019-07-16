import React from 'react';
import TableSelectButtonComponent from '../Component/TableSelectButtonComponent';
import ReactTableComponent from '../Component/ReactTableComponent';
import MaterialTableComponent from '../Component/MaterialTableComponent';
import BootStrapTableComponent from '../Component/BootStrapTableComponent';
import { withRouter } from 'react-router-dom';

class TableLayout extends React.Component {
  state = {
    tableFlag: 1  // 1: reactTable, 2: MaterialTable, 3: BootstrapTable
  }

  constructor(props) {
    super(props);
  }

  TableButtonClick = (tableFlag) => {
    this.setState({
      tableFlag: tableFlag
    });
  }

  render() {
    if (!this.props.isLogin) {
      console.log("not signin");
      this.props.history.push('/signin');
    }
    
    const {tableFlag} = this.state;
    const TableComponent = () => {
      if (tableFlag === 1) {
          return (
            <ReactTableComponent />
          )
        } else if (tableFlag === 2) {
          return (
            <MaterialTableComponent />
          )
        } else if (tableFlag === 3) {
          return (
            <BootStrapTableComponent />
          )
        }
    }
  
    return(
      <div>
        <TableSelectButtonComponent onClick={this.TableButtonClick}/>
        {/* {TableComponent()} */}
        <TableComponent />
      </div>
    );
  }
}

export default withRouter(TableLayout);