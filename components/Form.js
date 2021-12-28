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
import { red } from '@mui/material/colors';
import { blueGrey } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

const Desktop = styled.div`
  min-height: 50vh;
  width: "15rem";
  background-color: ${({ darkTheme, theme }) =>
    darkTheme === "1" ? theme.colors.dark : theme.colors.primary};
  display: flex;
`;

export default function Form1() {
  const [darkCk, setDarkCk] = useState("0");

  gsap.registerPlugin(ScrollTrigger);

  const darkMode = (val) => {
    Cookies.set("dark", val);
    const darkCookie = Cookies.get("dark") ? Cookies.get("dark") : "0";
    setDarkCk(darkCookie);
  };

  React.useEffect(() => {
    const darkCookie = Cookies.get("dark") ? Cookies.get("dark") : "0";
    setDarkCk(darkCookie);
  }, [darkCk]);

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

      <title>wise-consult</title>
      </Head>

      <main className={styles.main}>
      <header>

      </header>

        <Stack spacing={2} direction="row">

          {darkCk === "0" && (
            <IconButton
              sx={{color: blueGrey[900]}}
              aria-label="dark mode on"
              onClick={() => darkMode("1")}
            >
              <NightlightRoundIcon />
            </IconButton>
          )}
          {darkCk === "1" && (
            <IconButton
              sx={{color: cyan[300]}}
              aria-label="light mode on"
              onClick={() => darkMode("0")}
            >
              <LightModeIcon />
            </IconButton>
          )}
        </Stack>
        <Desktop darkTheme={darkCk}></Desktop>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
