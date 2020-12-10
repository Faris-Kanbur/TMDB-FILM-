import React from 'react';
import { TextField, Button, Container, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const stylesFunc = makeStyles((theme) => ({
    wrapper: {
        marginTop: "5rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center",
    },
    avatar: {
        margin: "2rem auto",
        backgroundColor: theme.palette.secondary.main,
    },
    signUp: {
        margin: "2rem",
    },
}));




const Signin = () => {
    const signupStyles = stylesFunc();

    return (

        <Container className={signupStyles.wrapper} maxWidth="sm">
            <Typography className={signupStyles.signUp} variant="h4">
                Sign In
            </Typography>
            <Avatar className={signupStyles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        name="displayName"
                        label="Display Name"
                        variant="outlined"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Primary
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                    >
                        Secondary
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export { Signin }