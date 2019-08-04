import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { ListItemIcon, Collapse } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Dvr from '@material-ui/icons/Dvr';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import People from '@material-ui/icons/People';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Filter from '@material-ui/icons/Filter';
import StarBorder from '@material-ui/icons/StarBorder';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const TpSchedulerLeftMenuComponent = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
        setState({...state, [side]: open});
    }

  const handleListItemClick = () => {
        setOpenCollapse(!openCollapse);
    }
    
    return (
        <Drawer open={state.left} onClose={toggleDrawer(props.side, false)}>
            <div className={classes.list} role="presentation">
              <List>
                <ListItem button key={'Home'} component={Link} to="/" onClick={toggleDrawer(props.side, false)}>
                  <ListItemIcon><HomeIcon/></ListItemIcon>Home
                </ListItem>
                <ListItem button key={'TP배치스케쥴러'} onClick={handleListItemClick}>
                  <ListItemIcon><Dvr/></ListItemIcon>TP배치스케쥴러
                </ListItem>
                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to="/tables" onClick={toggleDrawer(props.side, false)}>
                      <ListItemIcon><StarBorder/></ListItemIcon>
                      <ListItemText primary="승인배치리스트"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to="/etc" onClick={toggleDrawer(props.side, false)}>
                      <ListItemIcon><StarBorder/></ListItemIcon>
                      <ListItemText primary="승인배치현황"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to="/etc" onClick={toggleDrawer(props.side, false)}>
                      <ListItemIcon><StarBorder/></ListItemIcon>
                      <ListItemText primary="Table3"/>
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button key={'정산스케쥴러'} component={Link} to="/about" onClick={toggleDrawer(props.side, false)}>
                  <ListItemIcon><Filter/></ListItemIcon>정산스케쥴러
                </ListItem>
              </List>
              <Divider />
              <List>
                {['Sign in', 'Sign up'].map((text, index) => (
                  <ListItem button key={text} component={Link} to={text === 'Sign in' ? '/signin' : '/signup'} onClick={toggleDrawer(props.side, false)}>
                    <ListItemIcon>{text === 'Sign in' ? <PersonPinIcon/> : <People/>}</ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItem>
                ))}
              </List>
            </div>
            </Drawer>
          )
          
}

export default TpSchedulerLeftMenuComponent;