import React, {useState} from 'react';
import items from "./ListItems";
import {Container, List} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link, withRouter} from "react-router-dom";

const Item = props => <Grid item {...props}/>

function UseList({handleNavigation}) {
    return (
        <Container>
            <Item>
                <List>
                    {items.map(({label, Icon, path}, i) => (
                            <ListItem
                                button
                                key={i}
                                onClick={handleNavigation}
                                component={Link}
                                to={path}
                            >
                                <ListItemIcon>
                                    <Icon/>
                                </ListItemIcon>
                                <ListItemText>{label}</ListItemText>
                            </ListItem>
                        )
                    )}
                </List>
            </Item>
        </Container>
    )
}

export default withRouter(UseList);
