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

// import SvgIcon from '@material-ui/core/SvgIcon';
// import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    tab: {
        // flexGrow: 1,
        // width: '100%',
        // backgroundColor: theme.palette.background.paper,
        background: '#1fc5a9',//'linear-gradient(45deg, #1ff1a9 30%, #1fc5a9 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        // padding: '0 30px',
    },
}));

const ButtonComponent = styled('button')(({theme}) =>({
  backgroundColor: '#1fc5a9',
  color: 'white',
}));


const TopNavBarComponent = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [anchorE1, setAnchorE1] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [eventX, setEventX] = React.useState(null);
    const [eventY, setEventY] = React.useState(null);
    let signButton = [];

    function handleTabClick(event) {
        event.stopPropagation();
        setAnchorE1(event.currentTarget);
    }

    function handleIconClick(event) {
      event.stopPropagation();
      setAnchorE2(event.currentTarget);
      // setEventX(event.clientX);
      // setEventY(event.clientY);
      
  }

    function handleTabClose() {
        setAnchorE1(null);
    }

    function handleIconClose() {
      setAnchorE2(null);
  }

    function handleChange(event, newValue) {
      console.log('newValue : ' + newValue);
        setValue(newValue);
    }

    console.log(props.isLogin);
    if (!props.isLogin) {
      signButton.push(<Button style={{color: 'white'}} component={Link} to="/SignIn" key="signin">SIGN-IN</Button>);
      signButton.push(<Button style={{color: 'white'}} component={Link} to="/SignUp" key="signup">SIGN-UP</Button>);
    } else {
    // signButton.push(<Button style={{color: 'white', marginLeft: '160%'}} component={Link} to="/SignIn" onClick={props.handleSignOut} key="signout">
    signButton.push(<Button style={{color: 'white', marginLeft: '160%'}} component={Link} to="/SignIn" onClick={handleIconClick} key="signout">
      <PersonPinIcon color="action" style={{fontSize: '30'}}/>
      </Button>);
      // signButton.push(<Button style={{color: 'white'}} component={Link} to="/SignIn" onClick={props.handleSignOut} key="signout">SIGN-OUT</Button>);
    }
    console.log(props.isLogin);
    // console.log('styles >>>>>> ' + styles.NavBar);

    return (
      <span>
        <div >
            <AppBar position="static">
              <Tabs className={styles.Tabs}
                  value={value}
                  onChange={handleChange}
                  // indicatorColor="secondary"
                  // textColor="secondary"
                  // variant="standard"
                  // scrollButtons="auto"
                  >
                      <Tab className={styles.Tabs} label="Home" component={Link} to="/" />
                      <Tab className={styles.Tabs} label="TP배치스케쥴러" onClick={handleTabClick} />
                      <Tab className={styles.Tabs} label="정산배치스케쥴러" component={Link} to="/about" />
                      <div className={styles.SignButtonGroup}>
                        {signButton}
                      </div>
              </Tabs>
          </AppBar>
        </div>
        
        <div>
          <Menu
              id="top-nav-bar-menu"
              anchorEl={anchorE1}
              keepMounted
              open={Boolean(anchorE1)}
              onClose={handleTabClose}
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
                  <MenuItem onClick={handleTabClose} component={Link} to="/tables">승인 배치 리스트</MenuItem>
                  <MenuItem onClick={handleTabClose} component={Link} to="/etc">승인 배치 현황</MenuItem>
                  <MenuItem onClick={handleTabClose} component={Link} to="/etc">Table3</MenuItem>
          </Menu>
          <Menu
              id="top-icon-menu"
              anchorE1={anchorE2}
              keepMounted
              open={Boolean(anchorE2)}
              onClose={handleIconClose}
              elevation={0}
              getContentAnchorE1={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              // anchorPosition={{
              //   left: eventX,
              //   top: eventY+30
              //   // right: 150
              // }}
              // anchorReference='anchorPosition'
              >
                  <MenuItem onClick={handleIconClose} component={Link} to="/tables">Settings</MenuItem>
                  <MenuItem onClick={handleIconClose} component={Link} to="/signin" onClick={props.handleSignOut}>SignOut</MenuItem>
          </Menu>
        </div>
      </span>
    )
}

export default TopNavBarComponent;