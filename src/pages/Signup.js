import React from 'react';
import Firebase from '../firebase/firebase.utils'
import { TextField, Button, Container, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useFormik } from 'formik';


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




const Signup = () => {
    const signupStyles = stylesFunc();


    const formik = useFormik({
        initialValues: {
          displayName: '',
          email: '',
          password: '',
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        Firebase.register(values.displayName, values.email, values.password);
        },
      });

      const handleGoogleButtonClick = () =>{
          Firebase.useGoogleProvider();
      };



    return (

        <Container className={signupStyles.wrapper} maxWidth="sm">
            <Typography className={signupStyles.signUp} variant="h4">
                Sign Up
            </Typography>
            <Avatar className={signupStyles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            name="displayName"
                            label="displayName"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.displayName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type='submit'
                        >
                            Register
                    </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={handleGoogleButtonClick}
                        >
                            Register with Google
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export { Signup }