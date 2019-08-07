import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Settings from '@material-ui/icons/Settings';
import InputIcon from '@material-ui/icons/Input';


const useStyles = makeStyles(theme => ({
    MenuItem: {
      color: 'grey',
      fontWeight: theme.typography.fontWeightBold
    }
}));

const TopRightPersonIconDropMenuComponent = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const [anchorElIcon, setAnchorElIcon] = React.useState(null);

    // parent component에서 person icon click 시 function call
    React.useImperativeHandle(ref, () => ({
        handleIconClick(event) {
            event.stopPropagation();
            setAnchorElIcon(event.currentTarget);
        }
     }));

    // person icon 을 close하는 함수
    function handleIconMenuClose(event) {
        setAnchorElIcon(null);
        if (event.nativeEvent.target.outerText === 'Sign out') {    // 선택된 단어가 Sign Out인 경우(Settings인 경우는 해당안됨)
          console.log('signout>>>>>>>>>>>>>>>>>');
          props.handleSignOut();    // parent component에서 전달해준 Sign Out function을 call(parent component인 TopTabComponent도 그 부모인 App Component에게 받은 함수임)
        }
      }

    return(
        <div>
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
                    <MenuItem className={classes.MenuItem} onClick={handleIconMenuClose} component={Link} to="/home"><Settings style={{marginRight:'10px'}}/>Settings</MenuItem>
                    <MenuItem className={classes.MenuItem} onClick={handleIconMenuClose} component={Link} to="/"><InputIcon style={{marginRight:'10px'}}/>Sign out</MenuItem>
            </Menu>
        </div>
    )
});

export default TopRightPersonIconDropMenuComponent;