import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Image from "next/image";

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
import { TndevCtx, apiListeArticles } from "../../contexts/TndevContext";
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

export default function Post() {
  const router = useRouter();
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Psychiatre wise " />
        <meta name="author" content="https://tndev-art.tn" />
        <meta name="og:title" property="og:title" content="Psychiatre wise" />
        <meta name="twitter:card" content="Psychiatre wise" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/logo/logo.png" />
        <title>A propos</title>
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
            <Box component="div" sx={{ px: { xs: "1rem", md: "0" } }}>
              <Typography gutterBottom component="h2" variant="h5">
                Qui Somme nous ?
              </Typography>

              <Typography
                variant="subtitle1"
                paragraph
                sx={{ lineHeight: "23px" }}
              >
                Fondée par des psychologues (exerçant en institution ou en
                cabinet) et des enseignants-chercheurs d’université en
                psychologie, dont la formation et l’expérience regroupent
                l’ensemble des nombreux domaines d’intervention et d’études de
                cette discipline et profession, la première Maison de la
                Psychologie en France a officiellement ouvert ses portes le 8
                décembre 2012 (date de parution au Journal Officiel) dans la
                ville de Toulouse. Créée sous le statut d’association Loi de
                1901 (SIRET numéro 809 803 299 00027), la Maison de la
                Psychologie a obtenu en 2017 celui d’organisme de formation
                professionnelle continue (enregistré sous le numéro 76310857131,
                cet enregistrement ne valant pas agrément de l’Etat). Son
                administration est gérée par un Conseil d’Administration élu
                tous les deux ans lors de son Assemblée Générale Ordinaire.
                Plusieurs médias se sont fait l’écho de ses acticités dont les
                articles sont colligés dans sa revue de presse.
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                sx={{ lineHeight: "23px" }}
              >
                Vous l’avez compris, entre la réalité physique et la réalité
                perçue, il y a un monde ! Aussi, chacun appréhende son
                environnement à travers ses propres perceptions. Ce que nous
                voyons, entendons et comprenons ne constitue pas la seule
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                sx={{ lineHeight: "23px" }}
              >
                Ce que nous voyons, entendons et comprenons ne constitue pas la
                seule
              </Typography>
            </Box>
          </Grid>
          {/* images a propos*/}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ display: { xs: "none", md: "flex", maxHeight: "25rem" } }}
                image="https://images.unsplash.com/photo-1602306834394-6c8b7ea0ed9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt={"post.imageLabel"}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
