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

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cyan, blue, red } from '@material-ui/core/colors';

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
    let signButton = [];

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

    console.log(props.isLogin);
    if (!props.isLogin) {
      signButton.push(<Button className={styles.SignButtonSingle} component={Link} to="/SignIn" key="signin">SIGN-IN</Button>);
      signButton.push(<Button className={styles.SignButtonSingle} component={Link} to="/SignUp" key="signup">SIGN-UP</Button>);
    } else {
      signButton.push(<Button className={styles.SignButtonSingle} component={Link} to="/SignIn" onClick={props.handleSignOut} key="signout">SIGN-OUT</Button>);
    }
    console.log(props.isLogin);
    // console.log('styles >>>>>> ' + styles.NavBar);

    return (
      <span>
        {/* <div style={{float: 'left', width:'90%'}}> */}
        <div>
          {/* <ThemeProvider theme={theme}> */}
          <div>
            <AppBar position="static">
              <Tabs 
                  className={styles.Tabs}
                  value={value}
                  onChange={handleChange}
                  // indicatorColor="secondary"
                  // textColor="secondary"
                  // variant="standard"
                  // scrollButtons="auto"
                  >
                      {/* <HomeIcon className={classes.icon} component={Link} to="/" /> */}
                      {/* <Tab icon={<HomeIcon  />} aria-label="Home" component={Link} to="/" /> */}
                      <Tab label="Home" component={Link} to="/" />
                      <Tab label="TP배치스케쥴러" onClick={handleClick} />
                      <Tab label="정산배치스케쥴러" component={Link} to="/about" />
                      {/* <Tab label="" style={{marginLeft: '50%'}} disabled="true" /> */}
                      {/* <div style={{marginLeft: '35%'}}> */}
                      <div className={styles.SignButtonGroup}>
                        {signButton}
                      </div>
              </Tabs>
          </AppBar>
        </div>
        {/* <div className={styles.divRight}>
          {signButton}
        </div> */}
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