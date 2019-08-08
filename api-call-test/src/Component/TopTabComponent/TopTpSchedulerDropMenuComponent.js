import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles(theme => ({
    MenuItem: {
      color: 'grey',
      fontWeight: theme.typography.fontWeightBold
    }
}));


const TopTPSchedulerDropMenuComponent = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const [anchorElTab, setAnchorElTab] = React.useState(null);
    
    React.useImperativeHandle(ref, () => ({
        handleTabClick(event) {
            event.stopPropagation();
            setAnchorElTab(event.currentTarget);
            props.handleOpenTabMenu();
        }
    }));

    function handleTabMenuClose() {
        setAnchorElTab(null);
        props.handleOpenTabMenu();
    }

    return (
        <div>
            <Menu
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
        </div>
    )
});

export default TopTPSchedulerDropMenuComponent;