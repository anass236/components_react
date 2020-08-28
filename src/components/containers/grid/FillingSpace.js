import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import {Typography} from "@material-ui/core";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const Item = props => <Grid item  xs={12} sm={6} md={3} {...props}/>
const Container = props => <Grid container {...props}/>

const FillingSpace = withStyles(styles)(({classes, justify}) => {
    return (
        <div className={classes.root}>
            {/*<Hidden smDown></Hidden>*/} {/* Hide components after a sm breakpoints or lower reached */}
            <Container spacing={4}>
                <Item>
                    <Paper className={classes.paper}>
                        <Container justify="space-between">
                            <Container direction="column">
                                <Typography>Space Between</Typography>
                            </Container>
                            <Item>
                                <Chip label="xs=12"/>
                            </Item>
                            <Item>
                                <Chip label="sm=6"/>
                            </Item>
                            <Item>
                                <Chip label="md=3"/>
                            </Item>
                        </Container>
                    </Paper>
                </Item>
                <Item>
                    <Paper className={classes.paper}>
                        <Container justify="space-around">
                            <Container direction="column">
                                <Typography>Space around</Typography>
                            </Container>
                            <Item>
                                <Chip label="xs=12"/>
                            </Item>
                            <Item>
                                <Chip label="sm=6"/>
                            </Item>
                            <Item>
                                <Chip label="md=3"/>
                            </Item>
                        </Container>
                    </Paper>
                </Item>
                <Item>
                    <Paper className={classes.paper}>
                        <Container justify={justify}>
                            <Container direction="column">
                                <Typography>Normal justification</Typography>
                            </Container>
                            <Item>
                                <Chip label="xs=12"/>
                            </Item>
                            <Item>
                                <Chip label="sm=6"/>
                            </Item>
                            <Item>
                                <Chip label="md=3"/>
                            </Item>
                        </Container>
                    </Paper>
                </Item>
                <Item>
                    <Paper className={classes.paper}>
                        <Container justify="center">
                            <Container direction="column">
                                <Typography>Center</Typography>
                            </Container>
                            <Item>
                                <Chip label="xs=16"/>
                            </Item>
                            <Item>
                                <Chip label="sm=6"/>
                            </Item>
                            <Item>
                                <Chip label="md=3"/>
                            </Item>
                        </Container>
                    </Paper>
                </Item>
            </Container>
        </div>
    );
});

export default FillingSpace;