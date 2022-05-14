/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form } from 'formik';
import { useSnackbar } from 'notistack';
import {  useNavigate  } from 'react-router-dom';
import { registerSchema } from '../../../Models/authModels';
import register from '../../../Services/User/Register';
import useStyles from './_style';

const CreateUser =  (): JSX.Element => {
  const classes = useStyles();
  const history = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            name: '',
            surname: ''
          }}
          onSubmit={async (values) => {
            try {
              await register(values);
              history('/');
            } catch (e) {
              enqueueSnackbar(e as string, {
                variant: 'error'
              });
            }
          }}
        >
          {(props) => (
            // eslint-disable-next-line react/prop-types
            <Form onSubmit={props.handleSubmit}>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="surname"
                label="surname"
                type="text"
                id="surname"
                autoComplete="surname"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container>
          <Grid item>
            <Link href="/SignUp" variant="body2">
              {"already have an account ? OK. You can't use it since I don't have signin endpoint"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CreateUser;
