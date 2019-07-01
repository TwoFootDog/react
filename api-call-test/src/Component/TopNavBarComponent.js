import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'; 
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cyan, blue } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
  }
})

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

const TopNavBarComponent = () => {
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorE1, setAnchorE1] = React.useState(null);

    function handleClick(event) {
        event.stopPropagation();
        setAnchorE1(event.currentTarget);
    }

    function handleClose() {
        setAnchorE1(null);
    }

    function handleChange(event, newValue) {
      console.log('newValue : ' + newValue);
        setValue(newValue);
    }
    return (
      <span>
        <div>
          <ThemeProvider theme={theme}>
            <AppBar position="static">
              <Tabs 
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="scrollable"
                  scrollButtons="auto">
                      <Tab label="Home" component={Link} to="/" />
                      <Tab label="배치리스트" onClick={handleClick} />
                      <Tab label="About" component={Link} to="/about" />
              </Tabs>
          </AppBar>
          </ThemeProvider>
        </div>
        <div>
          <Menu
              id="top-nav-bar-menu"
              anchorEl={anchorE1}
              keepMounted
              open={Boolean(anchorE1)}
              onClose={handleClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
                  <MenuItem onClick={handleClose} component={Link} to="/tables">승인 배치 리스트</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/etc">Table2</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/etc">Table3</MenuItem>
          </Menu>
          {/* {value === 0 && <TabContainer>Table</TabContainer>} */}
          {/* {value === 1 && <TabContainer>About</TabContainer>} */}
        </div>
      </span>
    )
}

export default TopNavBarComponent;