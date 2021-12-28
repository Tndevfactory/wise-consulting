import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Inscription() {
  const router = useRouter();
  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }
  const [methods, states] = TndevCtx();

  const { darkColor } = states;

  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  gsap.registerPlugin(ScrollTrigger);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
        <title>Inscription</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: darkColor === "0" ? "warning.main" : "secondary.main",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  color={darkColor === "0" ? "warning" : "secondary"}
                  name="firstName"
                  size="small"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  color={darkColor === "0" ? "warning" : "secondary"}
                  size="small"
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color={darkColor === "0" ? "warning" : "secondary"}
                  required
                  size="small"
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color={darkColor === "0" ? "warning" : "secondary"}
                  required
                  size="small"
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color={darkColor === "0" ? "warning" : "secondary"}
                    />
                  }
                  label="Je souhaite recevoir la newsletter."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              size="small"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color={darkColor === "0" ? "warning" : "secondary"}
            >
              S'inscrire
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/connexion">
                  <a>
                    <Typography variant="body2" color="primary">
                      j'ai déja un compte? Se connecter
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
