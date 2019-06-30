import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'; 
import { Link } from 'react-router-dom';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

const TabButtonComponent = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    // indicatorColor="primary"
                    // textColor="primary"
                    variant="scrollable"
                    scorllButton="auto">
                        <Tab label="Table"/>
                        <Tab label="About"/>
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>Table</TabContainer>}
            {value === 1 && <TabContainer>About</TabContainer>}
        </div>
    )
}

export default TabButtonComponent;