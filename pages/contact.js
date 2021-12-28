import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled, { css } from "styled-components";
import Cookies from "js-cookie";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { blueGrey } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";

import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Contact() {
  const router = useRouter();
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  gsap.registerPlugin(ScrollTrigger);
const  handleSubmit =()=>{
  console.log('submited')
}
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: ".5rem .2rem", md: "1rem 3.3rem" } }}
      >
        <Grid
          container
          sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6}>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, px: { xs: "1rem", md: "0" } }}
              >
              <Typography
                variant="subtitle1"
                variant="h5"
                component="h3"
                sx={{ lineHeight: "23px" }}
                align="center"
              >
                Formulaire de contact
              </Typography>
              <TextField
                margin="normal"
                color={darkColor === "0" ? "warning" : "secondary"}
                size="small"
                required
                fullWidth
                id="nom"
                label="Nom et Prénom"
                name="nom"
                autoComplete="nom"
                autoFocus
              />
                <TextField
                  margin="normal"
                  color={darkColor === "0" ? "warning" : "secondary"}
                  size="small"
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
                  color={darkColor === "0" ? "warning" : "secondary"}
                  size="small"
                  required
                  fullWidth
                  id="phone"
                  label="Numéro de téléphone"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  color={darkColor === "0" ? "warning" : "secondary"}
                  size="small"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  id="demande"
                  label="Sujet de la demande"
                  name="demande"
                  autoComplete="phone"
                  autoFocus
                />
                <Button
                  type="submit"
                  size="small"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color={darkColor === "0" ? "warning" : "secondary"}
                >
                  Contactez-nous
                </Button>

              </Box>

          </Grid>
          {/* images a propos*/}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ display: { xs: "none", md: "flex", maxHeight: "27rem" } }}
                image="https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt={"post.imageLabel"}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
