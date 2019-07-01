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
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cyan, blue, red } from '@material-ui/core/colors';

// import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';

// 테마 변경
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    error: red,
  }
})

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const TopNavBarComponent = () => {
    const classes = useStyles();
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
        {/* <div style={{float: 'left', width:'90%'}}> */}
        <div>
          <ThemeProvider theme={theme}>
          <div>
            <AppBar position="static">
            
              <Tabs 
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="standard"
                  scrollButtons="auto">
                      {/* <HomeIcon className={classes.icon} component={Link} to="/" /> */}
                      {/* <Tab icon={<HomeIcon  />} aria-label="Home" component={Link} to="/" /> */}
                      <Tab label="Home" component={Link} to="/" />
                      <Tab label="TP배치스케쥴러" onClick={handleClick} />
                      <Tab label="정산배치스케쥴러" component={Link} to="/about" />
                      {/* <Tab disabled style={{float: 'left', width: '1000rem'}} /> */}
                      {/* <Button color="inherit" style={{marginLeft: '70%'}}>Login</Button> */}
                      <div style={{marginLeft: '70%'}}><Button color="inherit">Login</Button></div>
              </Tabs>
              
              
          </AppBar>
          </div>
          
          {/* <div><Button color="inherit" float="right" margin="1000px">Login</Button></div> */}
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
                  <MenuItem onClick={handleClose} component={Link} to="/etc">승인 배치 현황</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/etc">Table3</MenuItem>
          </Menu>
        </div>
      </span>
    )
}

export default TopNavBarComponent;