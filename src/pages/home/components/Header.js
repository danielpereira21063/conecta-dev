import React from 'react';
import { AppBar, Toolbar, Button, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SvgIcon } from '@mui/material';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none !important'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: '10px !important'
    },
    bell: {
        marginRight: '10px !important'
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>

                <div className={classes.userSection}>
                    <Button color='primary' variant='contained' className={classes.button}>Novo post</Button>

                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>

                    <Avatar alt="Remy Sharp" />
                    {/* <div className="">
                        <a href='/'>Conecta Dev</a>
                        <input type="text" />
                    </div>
                    <div className="">
                        <Button variant='contained' color='primary'>Novo post</Button>
                        <span>img1</span>
                        <span>img2</span>
                    </div> */}
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Header;