import Carousel from "../components/Carousel";
import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
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
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import FeaturedPosts from '../components/FeaturedPosts';
import PostRating from '../components/PostRating';
import Chip from '@mui/material/Chip';
import {
  MutationCache,
  useQuery,
  useMutation,
  useQueryClient,
} from "react-query";



export default function Home({ initialArticles }) {
  // console.log("Home ", initialArticles);
  const [articles, setArticles] = useState(() => initialArticles);
  const queryClient = useQueryClient();
  const router = useRouter();
  const [methods, states] = TndevCtx();
  const { darkColor } = states;
  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  gsap.registerPlugin(ScrollTrigger);

  // query show liste article
  const listeArticles = useQuery("liste-articles", () => apiListeArticles(), {
    initialData: initialArticles,
  });
  if (listeArticles.isLoading) {
    console.log("liste articles loading");
  }
  if (listeArticles.error) {
    console.log("liste articles ", listeArticles.error);
  }
  if (listeArticles.data) {
    //console.log(listeArticles.data);
  }

  React.useEffect(() => {
    setArticles(listeArticles?.data);
    //  console.log(articles);
  }, [articles]);

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
        <title>wise-consult</title>
      </Head>

      <Box sx={{ padding: { xs: "0 .2rem", md: "0 5rem" } }}>
        <Carousel />
      </Box>
      <Container maxWidth="xl" sx={{ padding:{ xs: ".5rem .2rem", md: "1rem 3.3rem" }}}>

        <FeaturedPosts/>

          <Grid container sx={{marginTop:'1rem', marginBottom:'1rem'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={9}>
              {[1,2,3].map((_, i)=>
                <CardActionArea component="a" href="#" key={i} sx={{ marginBottom:'1rem'}}>
                <Card sx={{ display: "flex" }}>
                  <CardContent
                    sx={{
                      flex: 1,
                      bgcolor: darkColor === "0" ? blueGrey[900] : "white",
                      color: darkColor === "0" ? "white" : "#333",
                    }}
                  >
                    <Typography gutterBottom component="h2" variant="h5">
                      Les biais cognitifs : percevoir ce qui nous arrange
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
                      Vous l’avez compris, entre la réalité physique et la réalité perçue, il y a un monde ! Aussi, chacun appréhende son environnement à travers ses propres perceptions. Ce que nous voyons, entendons et comprenons ne constitue pas la seule
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Continuer à lire ...
                    </Typography>

                    <PostRating/>
                      <Typography variant="body2" color="text.primary" gutterBottom  >

                      </Typography>



                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 250, display: { xs: "none", sm: "block" } }}
                    image={`https://picsum.photos/200/10${i}`}
                    alt={"post.imageLabel"}
                  />
                </Card>
              </CardActionArea>)
            }


            </Grid>
            {/* categories*/}
            <Grid item xs={12} md={3}>

              <Card sx={{ display: "flex" }}>
                <CardContent
                  sx={{
                    flex: 1,
                    bgcolor: darkColor === "0" ? blueGrey[900] : "white",
                    color: darkColor === "0" ? "white" : "#333",
                  }}
                >
                  <Typography gutterBottom component="h3" variant="h6">
                    Catégories :
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    La psychologie clinique
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Neuropsychologie
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie cognitive
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie sociale
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie expérimentale
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychopédagogie
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie développementale
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie des organisations
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Psychologie et éthologie
                  </Typography>
                  <Typography gutterBottom component="h3" variant="h6">
                    Chronologie :
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Décembre-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Novembre-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Octobre-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Septembre-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Aout-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Juillet-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Juin-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Mai-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Avril-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Mars-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Février-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Janvier-2021
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Décembre-2020
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Novembre-2020
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Octobre-2020
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Septembre-2020
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Aout-2020
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="primary"
                  >
                    Juillet-2020
                  </Typography>


                </CardContent>

              </Card>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const initialArticles = await apiListeArticles();
  // if (!initialArticles) {
  //  return {
  //    notFound: true,
  //  }

  return { props: { initialArticles } };
}
