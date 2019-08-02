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
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

// import SvgIcon from '@material-ui/core/SvgIcon';
// import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    Appbar: {
        // flexGrow: 1,
        // width: '80%',
        backgroundColor: '#192dfe',//'linear-gradient(45deg, #1ff1a9 30%, #1fc5a9 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        // padding: '0 px',
    },
    Tab: {
      minWidth: '200px',
      width: '200px',
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: '0.5%'
      // flex: 4,
      // widith: '90%'
    },
    SignButtonGroup: {
      // flex: 1,
      backgroundColor: '#192dfe',
      color: 'white',
      marginTop: '4%'
      // width: '10%',
      // alignItems: 'flex-end'
      // padding: '0 400px'
      // marginLeft: '50%'
      // padding: theme.spacing(0)
    },
    SignInButton: {
      color: 'white', 
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
    },
    SignUpButton: {
      backgroundColor: 'white',
      color: '#192dfe', 
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: '1%'
    },
    SignIcon: {
      float: 'right' 
    },
    menuButton: {
      marginRight: theme.spacing(100)
    }
}));



const TopNavBarComponent = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [anchorElTab, setAnchorElTab] = React.useState(null);
    const [anchorElIcon, setAnchorElIcon] = React.useState(null);
    const [anchorElIconTab, setAnchorElIconTab] = React.useState(null);
    let signButton = [];

    function handleTabClick(event) {
        event.stopPropagation();
        setAnchorElTab(event.currentTarget);
    }

    function handleIconClick(event) {
      event.stopPropagation();
      setAnchorElIcon(event.currentTarget);
    }

    function handleIconTabClick(event) {
      event.stopPropagation();
      setAnchorElIconTab(event.currentTarget);
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

    function handleIconTabMenuClose() {
      setAnchorElIconTab(null);
    }
    
    function handleChange(event, newValue) {
      console.log('newValue : ' + newValue);
        setValue(newValue);
    }

    console.log(props.isLogin);
    if (!props.isLogin) {
      signButton.push(<Button className={classes.SignInButton} component={Link} to="/SignIn" key="signin">Sign in</Button>);
      signButton.push(<Hidden only={['xs', 'sm']}><Button className={classes.SignUpButton} component={Link} to="/SignUp" key="signup">Sign up</Button></Hidden>);
    } else {
    signButton.push(<Button className={classes.SignIcon} component={Link} onClick={handleIconClick} key="signout">
      <PersonPinIcon color="action" style={{fontSize: '40'}}/>
      </Button>);
    }
    console.log(props.isLogin);

    return (
      <span>
        <div>
            <AppBar position="static" className={classes.Appbar}>
              <Grid container>
                <Grid item sm={10} xs={9}>
                  <Hidden only={['md', 'lg', 'xl']}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleIconTabClick}>
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="secondary"
                        // textColor="secondary"
                        variant="standard"
                        scrollButtons="auto"
                        >
                            <Tab className={classes.Tab} label="Home" component={Link} to="/" />
                            <Tab className={classes.Tab} label={<><div>TP배치스케쥴러<ExpandMore/></div></>} onClick={handleTabClick}/> 
                            <Tab className={classes.Tab} label="정산배치스케쥴러" component={Link} to="/about" />
                    </Tabs>
                  </Hidden>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <div className={classes.SignButtonGroup}>
                    {signButton}
                  </div>
                </Grid>
              </Grid>
          </AppBar>
        </div>
        
        <div>
          <Menu
              className={classes.Menu}
              id="top-nav-bar-menu"
              anchorEl={anchorElTab}
              keepMounted
              open={Boolean(anchorElTab)}
              onClose={handleTabMenuClose}
              // elevation={0}
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
              // elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
                  <MenuItem onClick={handleIconMenuClose} component={Link} to="/home">Settings</MenuItem>
                  <MenuItem onClick={handleIconMenuClose} component={Link} to="/">SignOut</MenuItem>
          </Menu>
          <Menu
              className={classes.Menu}
              id="icon-nav-bar-menu"
              anchorEl={anchorElIconTab}
              keepMounted
              open={Boolean(anchorElIconTab)}
              onClose={handleIconTabMenuClose}
              // elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                // vertical: 'bottom',
                // horizontal: 'center',
              }}
              transformOrigin={{
                // vertical: 'top',
                // horizontal: 'center',
              }}
              >
                  <MenuItem onClick={handleIconTabMenuClose} component={Link} to="/">Home</MenuItem>
                  <MenuItem onClick={handleIconTabMenuClose} component={Link} to="/etc">TP배치스케쥴러</MenuItem>
                  <MenuItem onClick={handleIconTabMenuClose} component={Link} to="/about">정산배치스케쥴러</MenuItem>
          </Menu>
        </div>
      </span>
    )
}

export default withRouter(TopNavBarComponent);
