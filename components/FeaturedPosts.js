import Carousel from "../components/Carousel";
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
import {
  MutationCache,
  useQuery,
  useMutation,
  useQueryClient,
} from "react-query";

const Desktop = styled.div`
  min-height: 50vh;
  width: "15rem";
  background-color: ${({ darkTheme, theme }) =>
    darkTheme === "0" ? theme.colors.dark : theme.colors.primary};
  display: flex;
`;

export default function FeaturedPosts() {
  // console.log("Home ", initialArticles);
  gsap.registerPlugin(ScrollTrigger);
  const queryClient = useQueryClient();
  const router = useRouter();
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#" sx={{   }}>
          <Card sx={{ display: "flex" ,  }}>
            <CardContent
              sx={{
                minHeight:{sx:0, md:'17rem'},
                flex: 1,
                bgcolor: darkColor === "0" ? blueGrey[900] : "white",
                color: darkColor === "0" ? "white" : "#333",
              }}
            >
              <Typography gutterBottom component="h2" variant="h5">
                La sociologie du présent : l'objectivité désacralisée
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: darkColor === "0" ? "#ddd" : "#333" }}
                variant="body2"
                color="text.secondary"
              >
                02-12-2021
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                sx={{ lineHeight: "23px" }}
              >
                Plus la sociologie prétend à l’objectivité scientifique, plus elle s’éloigne de la science. C’est à partir de cette conviction qu’Edgar Morin initie une approche empathique de l’analyse
              </Typography>
              <Typography variant="body2" color="primary">
                Continuer à lire ...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 250, display: { xs: "none", sm: "block" } }}
              image="https://picsum.photos/199/100"
              alt={"post.imageLabel"}
            />
          </Card>
        </CardActionArea>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent
              sx={{
                flex: 1,
            minHeight:{sx:0, md:'17rem'},
                bgcolor: darkColor === "0" ? blueGrey[900] : "white",
                color: darkColor === "0" ? "white" : "#333",
              }}
            >
              <Typography gutterBottom component="h2" variant="h5">
                Le relativisme à l'assaut des sciences
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: darkColor === "0" ? "#ddd" : "#333" }}
                variant="body2"
                color="text.secondary"
              >
                02-12-2021
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                sx={{ lineHeight: "23px" }}
              >
                Dans les années 1960, des chercheurs remettent en question l’objectivité et la fiabilité de la démarche scientifique. Si leurs appels à plus de prudence ont été largement adoptés, leurs positions les plus radicales restent absurdes aux yeux des plus rationalistes.
              </Typography>
              <Typography variant="body2" color="primary">
                Continuer à lire ...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 250, display: { xs: "none", sm: "block" } }}
              image="https://picsum.photos/201/100"
              alt={"post.imageLabel"}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}
