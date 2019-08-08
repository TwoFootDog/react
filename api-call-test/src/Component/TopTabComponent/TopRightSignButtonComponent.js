import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles(theme => ({
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
}));

const TopRightSignButtonComponent = (props) => {
    const classes = useStyles();

    return(
        <span>
            {!props.isLogin && 
            <div>
                <Button className={classes.SignInButton} component={Link} to="/SignIn" key="signin">Sign in</Button>
                <Hidden only={['xs', 'sm']}><Button className={classes.SignUpButton} component={Link} to="/SignUp" key="signup">Sign up</Button></Hidden>
            </div>
            }
            {props.isLogin && 
                <div>
                    <Button className={classes.SignIcon} component={Link} onClick={props.handleTopRightPersonIcon} key="signout">
                    <PersonPinIcon color="action" style={{fontSize: '40'}}/>
                    </Button>
                </div>
            }
        </span>
    )
}

export default TopRightSignButtonComponent;