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
import { Toolbar, ListItemIcon, Collapse } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import TpSchedulerLeftMenuComponent from './TopTabComponent/TpSchedulerLeftMenuComponent';

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dvr from '@material-ui/icons/Dvr';
import Filter from '@material-ui/icons/Filter';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import People from '@material-ui/icons/People';
import StarBorder from '@material-ui/icons/StarBorder';

// import SvgIcon from '@material-ui/core/SvgIcon';



const useStyles = makeStyles(theme => ({
    Appbar: {
        // flexGrow: 1,
        // width: '80%',
        backgroundColor: '#0171ff',//'linear-gradient(45deg, #1ff1a9 30%, #1fc5a9 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 80,
        // padding: '0 px',
    },
    TabText: {
      fontSize: '15px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(5.2),
      float: 'right',
      marginRight: theme.spacing(5)
    },
    Tab: {
      textTransform: 'none', // 대문자로 자동변환 방지
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(4)
      // flex: 4,
      // widith: '90%'
    },
    SignInButton: {
      textTransform: 'none',  
      backgroundColor: '#0171ff',
      color: 'white', 
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(1)
    },
    SignUpButton: {
      textTransform: 'none',
      backgroundColor: '#21afff',
      color: '#192dfe', 
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1)
    },
    SignIcon: {
      float: 'right',
      marginTop: '2%'
    },
    HomeIcon: {
      fontSize: '60px',
      color: '#0001fd',
      // marginLeft: theme.spacing(5),
      // marginTop: theme.spacing(2)
    },
    MenuItem: {
      color: 'grey',
      fontWeight: theme.typography.fontWeightBold
    },
    list: {
      width: 250
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
}));



const TopTabComponent = (props) => {
    const classes = useStyles();
    const TpSchedulerLeftMenuRef = React.useRef();

    const [value, setValue] = React.useState(0);
    const [anchorElTab, setAnchorElTab] = React.useState(null);
    const [anchorElIcon, setAnchorElIcon] = React.useState(null);
    const [anchorElIconTab, setAnchorElIconTab] = React.useState(null);
    let signButton = [];

    // const [state, setState] = React.useState({
    //   top: false,
    //   bottom: false,
    //   left: false,
    //   right: false
    // })

    // const [openCollapse, setOpenCollapse] = React.useState(false);

    // const toggleDrawer = (side, open) => event => {
    //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    //   }
    //   setState({...state, [side]: open});
    //   // console.info('toggleDrawer>>>>>>>' + event.nativeEvent.target.outerText);
    //   // const router = event.nativeEvent.target.outerText;
    // }

    // const sideList = side => (
    //   <div 
    //       className={classes.list}
    //       role="presentation"
    //       //  
    //       // onKeyDown={toggleDrawer(side, false)}
    //   >
    //     <List>
    //       <ListItem button key={'Home'} component={Link} to="/" onClick={toggleDrawer(side, false)}>
    //         <ListItemIcon><HomeIcon/></ListItemIcon>Home
    //       </ListItem>
    //       <ListItem button key={'TP배치스케쥴러'} onClick={handleListItemClick}>
    //         <ListItemIcon><Dvr/></ListItemIcon>TP배치스케쥴러
    //       </ListItem>
    //       <Collapse in={openCollapse} timeout="auto" unmountOnExit>
    //         <List component="div" disablePadding>
    //           <ListItem button className={classes.nested} component={Link} to="/tables" onClick={toggleDrawer(side, false)}>
    //             <ListItemIcon><StarBorder/></ListItemIcon>
    //             <ListItemText primary="승인배치리스트"/>
    //           </ListItem>
    //           <ListItem button className={classes.nested} component={Link} to="/etc" onClick={toggleDrawer(side, false)}>
    //             <ListItemIcon><StarBorder/></ListItemIcon>
    //             <ListItemText primary="승인배치현황"/>
    //           </ListItem>
    //           <ListItem button className={classes.nested} component={Link} to="/etc" onClick={toggleDrawer(side, false)}>
    //             <ListItemIcon><StarBorder/></ListItemIcon>
    //             <ListItemText primary="Table3"/>
    //           </ListItem>
    //         </List>
    //       </Collapse>
    //       <ListItem button key={'정산스케쥴러'} component={Link} to="/about" onClick={toggleDrawer(side, false)}>
    //         <ListItemIcon><Filter/></ListItemIcon>정산스케쥴러
    //       </ListItem>
    //     </List>
    //     <Divider />
    //     <List>
    //       {['Sign in', 'Sign up'].map((text, index) => (
    //         <ListItem button key={text} component={Link} to={text === 'Sign in' ? '/signin' : '/signup'} onClick={toggleDrawer(side, false)}>
    //           <ListItemIcon>{text === 'Sign in' ? <PersonPinIcon/> : <People/>}</ListItemIcon>
    //           <ListItemText primary={text}/>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // )


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
      if (event.nativeEvent.target.outerText === 'Sign out') {
        console.log('signout>>>>>>>>>>>>>>>>>');
        props.handleSignOut();
      }
    }

    function handleIconTabMenuClose() {
      setAnchorElIconTab(null);
    }

    // function handleListItemClick() {
    //   setOpenCollapse(!openCollapse);
    // }
    
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
                    {/* <IconButton color="inherit" aria-label="menu" onClick={handleIconTabClick}> */}
                    <IconButton color="inherit" aria-label="menu" onClick={() => TpSchedulerLeftMenuRef.current.toggleDrawer('left', true)}>
                    {/* <IconButton color="inherit" aria-label="menu"> */}
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                    <Grid container>
                    <Grid item md={1}>
                      <IconButton component={Link} to="/">
                        <HomeIcon className={classes.HomeIcon} />
                      </IconButton>
                    </Grid>
                    <Grid item md={11}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="secondary"
                        // textColor="secondary"
                        variant="standard"
                        scrollButtons="auto"
                        >
                            <Tab className={classes.Tab} label={<><div>TP배치스케쥴러<ExpandMore/></div></>} onClick={handleTabClick}/> 
                            <Tab className={classes.Tab} label="정산배치스케쥴러" component={Link} to="/about" />
                            <Tab className={classes.Tab} label="About Visualizer" component={Link} to="/about" />
                    </Tabs>
                    </Grid>
                    </Grid>
                  </Hidden>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <div>
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
                  <MenuItem className={classes.MenuItem} onClick={handleTabMenuClose} component={Link} to="/tables">승인 배치 리스트</MenuItem>
                  <MenuItem className={classes.MenuItem} onClick={handleTabMenuClose} component={Link} to="/etc">승인 배치 현황</MenuItem>
                  <MenuItem className={classes.MenuItem} onClick={handleTabMenuClose} component={Link} to="/etc">Table3</MenuItem>
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
                  <MenuItem className={classes.MenuItem} onClick={handleIconMenuClose} component={Link} to="/home">Settings</MenuItem>
                  <MenuItem className={classes.MenuItem} onClick={handleIconMenuClose} component={Link} to="/">Sign out</MenuItem>
          </Menu>
          <Menu
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
                  <MenuItem className={classes.MenuItem} onClick={handleIconTabMenuClose} component={Link} to="/">Home</MenuItem>
                  <MenuItem className={classes.MenuItem}  onClick={handleIconTabMenuClose} component={Link} to="/etc">TP배치스케쥴러</MenuItem>
                  <MenuItem className={classes.MenuItem}  onClick={handleIconTabMenuClose} component={Link} to="/about">정산배치스케쥴러</MenuItem>
                  <MenuItem className={classes.MenuItem}  onClick={handleIconTabMenuClose} component={Link} to="/signin">Sign in</MenuItem>
                  <MenuItem className={classes.MenuItem}  onClick={handleIconTabMenuClose} component={Link} to="/signup">Sign up</MenuItem>
          </Menu>
          <TpSchedulerLeftMenuComponent side="left" ref={TpSchedulerLeftMenuRef} />
          {/* <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer> */}
        </div>
      </span>
    )
}

export default withRouter(TopTabComponent);
