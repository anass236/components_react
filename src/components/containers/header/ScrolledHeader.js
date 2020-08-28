import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import FillingSpace from "../grid/FillingSpace";
import AdminToolbar from "./AdminToolbar";
import AdminDrawer from "../drawer/MyDrawer";

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export default function DashboardHeader(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar position="sticky">
                    <AdminToolbar open={false}/>
                    <AdminDrawer open={false}/>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
            <FillingSpace/>
        </React.Fragment>
    );
}
