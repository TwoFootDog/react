import React from 'react';
import TableSelectButtonComponent from '../Component/TableSelectButtonComponent';
import ReactTableComponent from '../Component/ReactTableComponent';
import MaterialTableComponent from '../Component/MaterialTableComponent';
import BootStrapTableComponent from '../Component/BootStrapTableComponent';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  TopComment: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    fontSize: '40px'
  }
})

class TableLayout extends React.Component {
  state = {
    tableFlag: 1  // 1: reactTable, 2: MaterialTable, 3: BootstrapTable
  }

  TableButtonClick = (tableFlag) => {
    this.setState({
      tableFlag: tableFlag
    });
  }

  render() {
    const {classes} = this.props;

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
        <div className={classes.TopComment}>배치프로그램 목록</div>
        {/* <TableSelectButtonComponent onClick={this.TableButtonClick}/> */}
        {/* {TableComponent()} */}
        {/* <TableComponent /> */}
        <MaterialTableComponent/>
        {/* <BootStrapTableComponent/> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(withRouter(TableLayout));