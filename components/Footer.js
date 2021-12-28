import Form from "../components/Form";
import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
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
import { blue } from "@mui/material/colors";
import { blueGrey } from "@mui/material/colors";
import { cyan, grey } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { MdFacebook } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { FaMeetup } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Fab from "@mui/material/Fab";
export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  return (
    <Box
      sx={{
        minHeight: "25vh",
        bgcolor: darkColor === "0" ? "#45454F" : "#5258EC",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: ".5rem .2rem", md: "1rem 3.3rem" },
          // bgcolor: "#52500C",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mt: "1.5rem",
                display: { xs: "flex", md: "flex" },
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
                bgcolor: "transparent",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ color: "white", display: "flex" }}
              >
                <Image src="/logo/logo.png" alt="logo" width={50} height={50} />
                <span
                  style={{
                    fontFamily: "Arial",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    color: darkColor === "0" ? "#5258EC" : "#45454F",
                  }}
                >
                  W
                </span>
                ise Consulting
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ color: "white", display: "flex" }}
              >
                Newsletter
              </Typography>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { mt: 1, width: "50ch" },
                  bgcolor: "transparent",
                  display: "flex",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                   color={ darkColor === '0' ?  'warning' : 'secondary'}
                  size="small"
                  variant="filled"
                  focused
                  type="text"
                  label="Adresse Email "
                />
                <Button
                  size="small"
                  sx={{
                    minHeight: "1rem",
                    minWidth: "5rem",
                    flex: 0,
                    color: "white",
                  }}
                   color={ darkColor === '0' ?  'warning' : 'secondary'}
                  variant="contained"
                >
                  S'abonner
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{ bgcolor: "transparent", width: { xs: "auto", md: "60ch" } }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <Link href="/">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                          marginBottom:{xs:'0.5rem', md:'1rem'}
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />
                        Accueil
                      </Typography>
                    </a>
                  </Link>
                  <Link href="/evenements">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                          marginBottom:{xs:'0rem', md:'1rem'}
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />
                        Evenements
                      </Typography>
                    </a>
                  </Link>
                </Grid>

                <Grid item xs={6} md={4}>
                  <Link href="/contact">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                          marginBottom:{xs:'.5rem', md:'1rem'}
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />
                        Contact
                      </Typography>
                    </a>
                  </Link>
                  <Link href="/apropos">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                          marginBottom:{xs:'0rem', md:'1rem'}
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />A propos
                      </Typography>
                    </a>
                  </Link>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Link href="/connexion">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                          marginBottom:{xs:'.5rem', md:'1rem'}
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />
                        Se connecter
                      </Typography>
                    </a>
                  </Link>
                  <Link href="/inscription">
                    <a>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#dde",
                          fontWeight: "300",
                          fontSize: ".9rem",
                        }}
                      >
                        <MdChevronRight style={{ marginTop: "3px" }} />
                        S'inscrire
                      </Typography>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mt: "1rem",
                bgcolor: "transparent",
                width: { xs: "auto", md: "60ch" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                  marginBottom:{xs:'1rem', md:'.5rem'}
              }}
            >
            <Link href="https://www.facebook.com/tndevArt1/"><a target="_blank"> <Fab color="default" size="small">
                <MdFacebook style={{ fontSize: "2rem", color: "#3b5998 " }} />
              </Fab></a></Link>


              <Link href="https://www.instagram.com/tndev8/"><a target="_blank">
              <Fab   color="default" size="small">
                <BsInstagram style={{ fontSize: "1.7rem", color: "#833AB4" }} />
              </Fab></a></Link>

              <Link href="https://www.meetup.com/your-events/?rse=1&oe=1&noe=1&sve=1"><a target="_blank"> <Fab color="default" size="small">
                <FaMeetup style={{ fontSize: "2rem", color: "#e51937 " }} />
              </Fab></a></Link>

              <Link href="https://www.youtube.com/channel/UCPGJpwAmXTfJ-Z2j_bqw2Ow"><a target="_blank"><Fab color="default" size="small">
                <BsYoutube style={{ fontSize: "2rem", color: "#c4302b" }} />
              </Fab></a></Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          minHeight: "5vh",
          bgcolor: "#494444",
          color: "#EFEABB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href='https://Tndev-art.tn'><a target="_blank"><Typography variant="body2" color="inherit">
          Copyright &copy; {"2020 - "+ new Date().getFullYear()}  Tndev-art.tn
        </Typography></a></Link>
      </Box>
    </Box>
  );
}
