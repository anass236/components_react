import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
})

const UsingBreakpoint = withStyles(styles) (({classes, justify}) => {
    return (
        <div className={classes.root}>
            <Grid container justify={justify}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
});

export default UsingBreakpoint;