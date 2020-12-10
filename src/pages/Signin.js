import React from 'react';
import Firebase from '../firebase/firebase.utils'
import { TextField, Button, Container, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik } from 'formik';


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

const initialValues = {
    email: '',
    password: '',
};



const Signin = () => {
    const signinStyles = stylesFunc();

      const handleGoogleButtonClick = () =>{
          Firebase.useGoogleProvider();
      };

      const handleFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
      }

    return (

        <Container className={signinStyles.wrapper} maxWidth="sm">
            <Typography className={signinStyles.signUp} variant="h4">
                Sign In
            </Typography>
            <Avatar className={signinStyles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
            >

                {({handleSubmit, values,handleChange}) => (
                 <form onSubmit={handleSubmit} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={values.email}
                            onChange={handleChange}

                        />
                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={values.password}
                            onChange={handleChange}
      
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type='submit'
                        >
                            Sing In
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
            )}
            </Formik>
       </Container>
    )
}

export { Signin }