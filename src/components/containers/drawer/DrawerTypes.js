import React, {useState, useEffect} from 'react';
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from "@material-ui/core";

const Item = props => <Grid item {...props}/>

function DrawerTypes({classes, variant}) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('Home')
    const [items] = useState([
        {label: 'Home', Icon: HomeIcon},
        {label: 'Page 2', Icon: WebIcon},
        {label: 'Page 3', Icon: WebIcon, disabled: true},
        {label: 'Page 4', Icon: WebIcon, hidden: true},
        {label: 'Page 5', Icon: WebIcon}
    ]);
    const onClick = content => () => {
        setOpen(false);
        setContent(content);
    };
    return (
        <Container justify="space-between">
            <Item>
                <Typography>{content}</Typography>
            </Item>
            <Item>
                <Drawer
                    variant={variant}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <List>
                        {items
                            .filter(({hidden}) => !hidden)
                            .map(({label, disabled, Icon},i) => (
                                <ListItem
                                    button
                                    key={i}
                                    disabled={disabled}
                                    onClick={onClick(label)}
                                >
                                    <ListItemIcon>
                                        <Icon/>
                                    </ListItemIcon>
                                    <ListItemText>{label}</ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </Item>
            <Item>
                <Button onClick={() => setOpen(!open)}>
                    {open ? 'Hide' : 'Show'} Drawer
                </Button>
            </Item>
        </Container>
    );
}

export default DrawerTypes;