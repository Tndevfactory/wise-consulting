import Form from "../components/Form";
import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
import { gsap } from "gsap";
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
import { cyan } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TndevCtx, apiListeArticles } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import TextField from "@mui/material/TextField";

const Desktop = styled.div`
  min-height: 50vh;
  width: "15rem";
  background-color: ${({ darkTheme, theme }) =>
    darkTheme === "1" ? theme.colors.dark : theme.colors.primary};
  display: flex;
`;

export default function Navbar() {
  const router = useRouter();
  const [methods, states] = TndevCtx();

  const { darkColor, setDarkColor } = states;

  const { authMethods } = methods;
  const { apiListeArticles } = authMethods;

  gsap.registerPlugin(ScrollTrigger);

  const pages = ["Accueil", "evenements", "contact", "apropos"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [connected, setConnected] = React.useState(false);
  const [anchorElUserDisconnected, setAnchorElUserDisconnected] =
    React.useState(null);
  const [anchorElUserConnected, setAnchorElUserConnected] =
    React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenuDisconnected = (event) => {
    setAnchorElUserDisconnected(event.currentTarget);
  };
  const handleCloseUserMenuDisconnected = () => {
    setAnchorElUserDisconnected(null);
  };

  const handleOpenUserMenuConnected = (event) => {
    setAnchorElUserConnected(event.currentTarget);
  };
  const handleCloseUserMenuConnected = () => {
    setAnchorElUserConnected(null);
  };

  const darkMode = (val) => {
    Cookies.set("dark", val);
    const darkCookie = Cookies.get("dark") ? Cookies.get("dark") : "0";
    setDarkColor(darkCookie);
  };

  React.useEffect(() => {
    const darkCookie = Cookies.get("dark") ? Cookies.get("dark") : "0";
    setDarkColor(darkCookie);
  }, [darkColor]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ mb: 9, bgcolor: darkColor === "0" ? "#45454F" : "#5258EC" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <a>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  <Image
                    src="/logo/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
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
              </a>
            </Link>

            <Box sx={{ flexGrow: 1,
                display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
              {/*mobile dropdown menu*/}
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={`${page === "Accueil" ? "/" : "/"+page}`} key={page}>
                      <a>
                        <Typography textAlign="center" sx={{textTransform:'capitalize' }}>{page}</Typography>
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* mobile */}

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    fontSize: "1rem",


                  }}
                >
                <Link href="/">
                  <a style={{display:'flex'}}>
                  <Image
                    src="/logo/logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <span
                    style={{
                      fontFamily: "Arial",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: darkColor === "0" ? "#5258EC" : "#45454F",
                    }}
                  >
                    W
                  </span>ise Consulting</a></Link>
                </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link href={`${page === "Accueil" ? "/" : "/"+page}`} key={page}>
                  <a>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block",}}
                    >
                      {page}
                    </Button>
                  </a>
                </Link>
              ))}
            </Box>
            {/* search  */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                marginRight: { xs: ".1rem", md: "1rem" },
                position: "relative",
                borderRadius: "8px",
              }}
            >
              {/*<MdSearch style={{fontSize:'1.3rem', top:'1px', left:'0px', position:'absolute'}}/>*/}
              <TextField
                sx={{
                  borderRadius: "6px",
                  bgcolor:
                    darkColor === "0" ? "rgba(255,255,255,0.2)" : "transparent",
                }}
                id="searchPosts"
                label="  Rechercher Articles"
                variant="filled"
                size="small"
              />
            </Box>
            {/* user Disconnected menu*/}
            {!connected && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Authentification">
                  <IconButton
                    onClick={handleOpenUserMenuDisconnected}
                    sx={{ p: 0 }}
                  >
                    <MdAccountCircle
                      style={{
                        color: darkColor === "0" ? "orange" : "dodgerblue",
                        backgroundColor: "white",
                        fontSize: "1.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "35px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUserDisconnected}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUserDisconnected)}
                  onClose={handleCloseUserMenuDisconnected}
                >
                  <MenuItem onClick={handleCloseUserMenuDisconnected}>
                    <Link href="/connexion"><a>
                        <Typography textAlign="center">Connexion</Typography>
                      </a></Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenuDisconnected}>
                    <Link href="/inscription"><a>
                        <Typography textAlign="center">Inscription</Typography>
                      </a></Link>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {/* user connected menu*/}
            {connected && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenuConnected}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://randomuser.me/api/portraits/women/75.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUserConnected}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUserConnected)}
                  onClose={handleCloseUserMenuConnected}
                >
                  <MenuItem onClick={handleCloseUserMenuConnected}>
                    <Link href={`/profile/${fethi - ben - tenfouss - 5}`}><a>
                        <Typography textAlign="center">Profile</Typography>
                      </a></Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenuConnected}>
                    <Link href="deconnect"><a>
                        <Typography textAlign="center">Deconnexion</Typography>
                      </a></Link>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            <Stack spacing={2} direction="row">
              {darkColor === "0" && (
                <IconButton
                  sx={{ color: cyan[300] }}
                  aria-label="dark mode on"
                  onClick={() => darkMode("1")}
                >
                  <LightModeIcon />
                </IconButton>
              )}
              {darkColor === "1" && (
                <IconButton
                  sx={{ color: blueGrey[900] }}
                  aria-label="light mode on"
                  onClick={() => darkMode("0")}
                >
                  <MdDarkMode />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
