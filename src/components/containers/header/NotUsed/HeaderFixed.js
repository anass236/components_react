import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import FillingSpace from "../../grid/FillingSpace";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: {
        "minHeight": 56,
        "@media (min-width:0px) and (orientation: landscape)": {
            "minHeight": 48
        },
        "@media (min-width:600px)": {
            "minHeight": 64
        }
    }
});

const FixedPosition = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        aria-label="Menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
        </div>
    );
};

export default FixedPosition;