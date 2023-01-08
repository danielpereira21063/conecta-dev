import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Box, Avatar, colors, TextField, Button } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh'
    },
    image: {
        background: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '16px !important'
    },
    avatar: {
        background: colors.indigo.A400 + ' !important',
        marginBottom: '8px !important'
    },
    button: {
        marginTop: '8px !important'
    },
    form: {
        margin: '16px 32px !important'
    }
}));

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a
                color="inherit"
                href="https://github.com/danielpereira21063"
            >
                Daniel Sanches
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();

    async function handleSignIn() {
        try {
            const user = { email: 'danielsanches6301@gmail.com', password: 'admin9' };
            const response = await axios.post("/api/home/login", user);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction='column'
                justifyContent='center'
                alignContent='center'
                md={7}
                className={classes.image}>

                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px', textAlign: 'center' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software.</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(255,255,255,0.7)', textAlign: 'center', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de softwares.
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={8}>
                    <Avatar className={classes.avatar}><LockOutlined></LockOutlined></Avatar>

                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email" />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            autoComplete="current-password" />

                        <Button onClick={handleSignIn} fullWidth variant="contained" color="primary" className={classes.button}>
                            Entrar
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>

                    </form>

                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;