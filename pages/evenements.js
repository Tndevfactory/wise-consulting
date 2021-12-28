import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useRef } from "react";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import axios from "axios";
import Link from "next/link";
import { green, pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";

import { gsap } from "gsap";

function createData(evenement, date, duree, lieu, prix, rejoindre) {
  return { evenement, date, duree, lieu, prix, rejoindre };
}

const rows = [
  createData(
    "Séminaire Psychologie cognitive ",
    "29/12/2021 ",
    "2h",
    "Centre les moulinaux paris 16ieme",
    "gratuit",
    "uid-435"
  ),
  createData(
    "Atelier Neuropsychologie ",
    "20/12/2021 ",
    "3h",
    "Centre les belaire paris 19ieme",
    "15€",
    "uid-465"
  ),
  createData(
    "Séminaire Psychologie cognitive ",
    "12/11/2021 ",
    "2h",
    "paris 16ieme",
    "gratuit",
    "uid-495"
  ),
  createData(
    "Séminaire Psychologie cognitive ",
    "02/11/2021 ",
    "2h",
    "paris 16ieme",
    "gratuit",
    "uid-495"
  ),
  createData(
    "Atelier profilage psychologique ",
    "22/01/2022 ",
    "2h",
    "Bordeau girondelle 75432",
    "gratuit",
    "uid-435"
  ),  createData(
      "Atelier Neuropsychologie ",
      "12/10/2021 ",
      "3h",
      "Centre les belaire paris 19ieme",
      "35€",
      "uid-465"
    ),
    createData(
      "Psychologie familiale conjugale  ",
      "02/10/2021 ",
      "4h",
      "Belleville issy paris 10ieme",
      "25€",
      "uid-455"
    ),
    createData(
      "Séminaire Psychologie cognitive ",
      "17/09/2021 ",
      "2h",
      "paris 16ieme",
      "gratuit",
      "uid-465"
    ),


];

export default function Evenements() {
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;
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
        <title>Evenements</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: ".5rem .2rem", md: "2rem 2rem" } }}
      >
        <Typography
          variant="h4"
          component="h3"
          align="center"
          color={darkColor === "0" ? "warning" : "secondary"}
          gutterBottom
        >
          Événements
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ bgcolor: darkColor === "0" ? "#45454F" : "#5258EC" , color:'white'}}>
              <TableRow>
                <TableCell  sx={{ color:'white'}}>Intitulé</TableCell>
                <TableCell  sx={{ color:'white'}} align="right">Date</TableCell>
                <TableCell  sx={{ color:'white'}} align="right">Durée</TableCell>
                <TableCell  sx={{ color:'white'}} align="center">Lieu</TableCell>
                <TableCell  sx={{ color:'white'}} align="right">Prix/personne</TableCell>
                <TableCell  sx={{ color:'white'}} align="right">Rejoindre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.evenement}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.evenement}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.duree}</TableCell>
                  <TableCell align="right">{row.lieu}</TableCell>
                  <TableCell align="right">
                    <Chip label={row.prix} variant="contained" color={row.prix === 'gratuit' ? 'success': 'error'}/>

                  </TableCell>
                  <TableCell align="right">

                  <Button size='small' color='secondary' disabled={row.rejoindre !== 'uid-435'? true: false}
                   id={row.rejoindre} variant="outlined" endIcon={<SendIcon />}>
                    rejoindre
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
