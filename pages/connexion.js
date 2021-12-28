import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled, { css } from "styled-components";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Connexion() {
  const router = useRouter();
  const [methods, states] = TndevCtx();

  const { darkColor } = states;

  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <Head>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Psychiatre wise " />
      <meta name="author" content="https://tndev-art.tn" />
      <meta name="og:title" property="og:title" content="Psychiatre wise" />
      <meta name="twitter:card" content="Psychiatre wise" />
      <meta name="robots" content="index, follow" />
<link rel="icon" type="image/png" href="/logo/logo.png" />
      <title>Connexion</title>
    </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: darkColor === '0' ?  'warning.main' : 'secondary.main' }}

          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              color={ darkColor === '0' ?  'warning' : 'secondary'}
              size='small'
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              color={ darkColor === '0' ?  'warning' : 'secondary'}
              size='small'
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se rappeler de moi"
            />
            <Button
              type="submit"
              size='small'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
               color={ darkColor === '0' ?  'warning' : 'secondary'}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
              <Link href='/inscription'><a>
              <Typography  variant="body2" color='primary'>
                  Oubli mot de passe?
                </Typography></a></Link>
              </Grid>
              <Grid item>
                <Link href='/inscription'><a>
                <Typography  variant="body2" color='primary'>
                  {"Vous n'avez pas de compte? S'inscrire"}
                </Typography></a></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
