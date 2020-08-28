import React from "react";
import {
    Drawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DrawerHeader from './DrawerHeader';

const AdminDrawer = ({ history, open }) => {
    const itemsList = [
        {
            text: "Dashboard",
            icon: <DashboardIcon />,
            onClick: () => history.push("/dashboard")
        },
        {
            text: "Calendar",
            icon: <TodayIcon />,
            onClick: () => history.push("/calendar")
        },
        {
            text: "Task",
            icon: <PlaylistAddCheckIcon />,
            onClick: () => history.push("/Task")
        }
    ];
    return (
        <div className="app-sidebar d-flex">
            <Drawer variant="persistent" className="app-sidebar-content"

                anchor="left"
                open={open}
                classes={{
                    paper: 'side-nav'
                }}
            >
                
                <DrawerHeader/>
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={index} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </div>
    );
};

export default withRouter(AdminDrawer);
