import React, {useState} from 'react';
import clsx from 'clsx';
import {NavLink, Route, Switch} from 'react-router-dom';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const drawerWidth = 600;
const useStyles = makeStyles(theme => ({

    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: theme.palette.primary.main
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const NavListItem = ({Icon, text, active, ...other}) => {
    const classes = useStyles();
    return (<ListItem
        component={NavLink} {...other}
    >
        <ListItemIcon
            classes={{
                root: clsx({[classes.activeListItem]: active})
            }}
        >
            <Icon/>
        </ListItemIcon>
        <ListItemText
            classes={{
                primary: clsx({
                    [classes.activeListItem]: active
                })
            }}
        >
            {text}
        </ListItemText>
    </ListItem>);

};

const NavItem = props => (
    <Switch>
        <Route
            exact
            path={props.to}
            render={() => <NavListItem active={true} {...props} />}
        />
        <Route path="/"
               render={() => <NavListItem
                   {...props}/>}
        />
    </Switch>
);
const Item = props => <Grid item {...props}/>

function AdminDrawer({ open }) {
    const classes = useStyles();
    const [open, setOpen] = useState({open});

    return (
        <Container justify="space-between">
            <Item className={classes.alignContent}>
                <Route
                    exact
                    path="/"
                    render={() => <Typography>Home</Typography>}
                />
                <Route
                    exact
                    path="/page1"
                    render={() => <Typography>Page 1</Typography>}
                />
                <Route
                    exact
                    path="/page2"
                    render={() => <Typography>Page2</Typography>}
                />
            </Item>
            <Item>
                <Drawer

                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={open}
                    onClose={() => setOpen({open})}
                >
                    <List>
                        <NavItem
                            to="/"
                            text="Home"
                            Icon={HomeIcon}
                            onClick={() => setOpen(false)}
                        />
                        <NavItem
                            to="/page1"
                            text="Page 1"
                            Icon={WebIcon}
                            onClick={() => setOpen(false)}
                        />
                        <NavItem
                            to="/page2"
                            text="Page 2"
                            Icon={WebIcon}
                            onClick={() => setOpen(false)}
                        />
                    </List>
                </Drawer>
            </Item>
        </Container>
    );
}

export default AdminDrawer;