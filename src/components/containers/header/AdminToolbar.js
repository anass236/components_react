import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
})
const AdminToolbar = ({onclick, class_hide}) => {
    const classes = useStyles();
    return(
        <Toolbar>
            <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label="Menu"
                onClick={onclick}
                classes={class_hide}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="dashboard"
                color="inherit"
                className={classes.flex}
            >
                Dashboard
            </Typography>
            <IconButton
                color='inherit'
                aria-label="Notification"
            >
                <NotificationsIcon/>
            </IconButton>
            <IconButton
                color='inherit'
                aria-label="Person"
            >
                <PersonIcon/>
            </IconButton>
        </Toolbar>
    );
}
export default AdminToolbar;