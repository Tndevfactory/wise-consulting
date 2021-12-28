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
import { red } from "@mui/material/colors";
import { blueGrey } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const CarouselView = styled.div`
  height: 60vh;
  position: relative;
`;
const CarouselImg = styled.img`
  width: 100%;
  object-fit: cover;

  top: 0;
  left: 0;
  height: 100%;
`;
const CarouselCaption = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;
function Item({ item }) {
  const router = useRouter();
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;
  return (
    <CarouselView>
      <CarouselImg src={item.image} />
      <CarouselCaption>
        <Typography variant="h4"
          component="h4"
          gutterBottom
          sx={{textAlign:'center', fontSize: { xs: '1.5rem', md: '2rem' }}}>
          {item.name}
        </Typography>
        <Typography variant="h5"
          component="h5" gutterBottom
          sx={{padding:'.5rem .5rem',textAlign:'center',fontSize: { xs: '1.1rem', md: '1rem' }}}>
          {item.description}
        </Typography>

        <Button variant="contained"
          href="#outlined-buttons"

           color={ darkColor === '0' ?  'warning' : 'secondary'}
           size="medium"
           sx={{mt:2,fontSize: { xs: '.75rem', md: '.8rem' }}}
           >
          Voir Plus d'information !
        </Button>
      </CarouselCaption>
    </CarouselView>
  );
}

export default function MyCarousel() {
  var items = [
    {
      name: "Parler, est-ce apprendre à penser ?",
      description: "La dignité des personnes placées en isolement et sous contention...",
      image: "https://images.unsplash.com/photo-1630332458774-c1786cfb68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Écrans : comment sortir de l'emprise ?",
      description: "Les écrans (smartphones, ordinateurs, tablettes) ont envahi nos quotidiens au ...",
      image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      name: "Psychologie de l'enfant : vers de nouveaux modèles",
      description: "L’intelligence de l’enfant progresserait par stades, selon l’âge...",
      image: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Moins d'hystériques, plus de pervers narcissiques",
      description: "Deux sociologues se sont intéressés à la façon dont la notion de «pervers narcissique»...",
      image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <Carousel animation="slide" interval="4000" duration="1000">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
