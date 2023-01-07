import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    },
    left: {
        background: 'red',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        background: 'yellow',
        flexBasis: "42%"
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    }
}));

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px', textAlign: 'center' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software.</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de softwares.
                </Typography>
            </div>
            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}

export default SignIn;