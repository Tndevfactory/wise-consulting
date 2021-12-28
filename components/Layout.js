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
import { red } from "@mui/material/colors";
import { blueGrey } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";
import Navbar from "./Navbar";
import dynamic from 'next/dynamic'
import Footer from './Footer';
const BackToTopNoSSR = dynamic(
  () => import('./BackToTop'),
  { ssr: false }
)



export default function Layout({ children }) {


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
      <header>
        <Navbar/>
      </header>
      <main>
        <Box id="back-to-top-anchor" sx={{ visibility: 'hidden'}}></Box>
        {children}
      </main>
      <BackToTopNoSSR/>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
