import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography'; 
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import styles from '../Css/NavBar.module.css';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Toolbar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

// import SvgIcon from '@material-ui/core/SvgIcon';
// import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    Toolbar: {
        // flexGrow: 1,
        // width: '80%',
        backgroundColor: '#192dfe',//'linear-gradient(45deg, #1ff1a9 30%, #1fc5a9 90%)',
        // border: 0,
        // borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontSize: '15px',
        // height: 40,
        // padding: '0 px',
    },
    Tab: {
      // flex: 4,
      widith: '90%'
    },
    SignButtonGroup: {
      // flex: 1,
      backgroundColor: '#192dfe',
      color: 'white',
      // width: '10%',
      // alignItems: 'flex-end'
      // padding: '0 500px'
      marginLeft: '65%'
    }
}));



const TopNavBarComponent = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [anchorElTab, setAnchorElTab] = React.useState(null);
    const [anchorElIcon, setAnchorElIcon] = React.useState(null);
    let signButton = [];

    function handleTabClick(event) {
        event.stopPropagation();
        setAnchorElTab(event.currentTarget);
    }

    function handleIconClick(event) {
      event.stopPropagation();
      setAnchorElIcon(event.currentTarget);
    }

    function handleTabMenuClose() {
      setAnchorElTab(null);
    }

    function handleIconMenuClose(event) {
      setAnchorElIcon(null);
      if (event.nativeEvent.target.outerText === 'SignOut') {
        console.log('signout>>>>>>>>>>>>>>>>>');
        props.handleSignOut();
      }
    }
    
    function handleChange(event, newValue) {
      console.log('newValue : ' + newValue);
        setValue(newValue);
    }

    console.log(props.isLogin);
    if (!props.isLogin) {
      signButton.push(<Button style={{color: 'white', fontSize: '15px'}} component={Link} to="/SignIn" key="signin">SIGN-IN</Button>);
      signButton.push(<Button style={{color: 'white', fontSize: '15px'}} component={Link} to="/SignUp" key="signup">SIGN-UP</Button>);
    } else {
    signButton.push(<Button style={{color: 'white', marginLeft: '160%'}} component={Link} onClick={handleIconClick} key="signout">
      <PersonPinIcon color="action" style={{fontSize: '40'}}/>
      </Button>);
    }
    console.log(props.isLogin);

    return (
      <span>
        <div>
            <AppBar position="static">
              <Toolbar className={classes.Toolbar}>
              <Tabs className={classes.Tab}
                  // className={classes.tab}
                  value={value}
                  onChange={handleChange}
                  // indicatorColor="secondary"
                  // textColor="secondary"
                  variant="standard"
                  scrollButtons="auto"
                  >
                      <Tab label="Home" component={Link} to="/" />
                      <Tab label="TP배치스케쥴러" onClick={handleTabClick} />
                      <Tab label="정산배치스케쥴러" component={Link} to="/about" />
              </Tabs>
              <div className={classes.SignButtonGroup}>
                {signButton}
              </div>
              </Toolbar>
          </AppBar>
        </div>
        
        <div>
          <Menu
              id="top-nav-bar-menu"
              anchorEl={anchorElTab}
              keepMounted
              open={Boolean(anchorElTab)}
              onClose={handleTabMenuClose}
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
                  <MenuItem onClick={handleTabMenuClose} component={Link} to="/tables">승인 배치 리스트</MenuItem>
                  <MenuItem onClick={handleTabMenuClose} component={Link} to="/etc">승인 배치 현황</MenuItem>
                  <MenuItem onClick={handleTabMenuClose} component={Link} to="/etc">Table3</MenuItem>
          </Menu>
          <Menu
              id="top-icon-menu"
              anchorEl={anchorElIcon}
              keepMounted
              open={Boolean(anchorElIcon)}
              onClose={handleIconMenuClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              >
                  <MenuItem onClick={handleIconMenuClose} component={Link} to="/home">Settings</MenuItem>
                  <MenuItem onClick={handleIconMenuClose} component={Link} to="/">SignOut</MenuItem>
          </Menu>
        </div>
      </span>
    )
}

export default withRouter(TopNavBarComponent);
