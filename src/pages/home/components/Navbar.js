import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, ListItem, ListItemText, ListSubheader, Paper } from '@mui/material';


const useStyles = makeStyles(() => ({
    root: {
        padding: '16px',
        width: 275,
        marginRight: '16px'
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: "reactjs", },
    { id: 2, name: "javascript", },
    { id: 3, name: "dotnet", },
    { id: 4, name: "php", },
    { id: 5, name: "materialdesign", },
    { id: 6, name: "webdesign", },
    { id: 7, name: "webdev", }
]

function Navbar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant='outlined' color='secondary' className={classes.button}>Registrar grátis</Button>
            <ListSubheader>{'Tags em alta'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais tags</ListItem>
        </Paper>
    )
}

export default Navbar