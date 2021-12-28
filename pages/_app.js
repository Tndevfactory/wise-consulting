import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { TndevProvider } from "../contexts/TndevContext";
import { useRouter } from "next/router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top:5rem;
    box-sizing: border-box;
    background-color: #ddd;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      line-height: 23px;
   }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;

  }

`;

const theme = {
  colors: {
    primary: "#0097F0",
    dark: "#253238",
  },
};

function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }
  return (
    <>
      <CssBaseline />
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="software of paie" />

        <meta name="author" content="ch" />
        <meta name="og:title" property="og:title" content="soft paie" />
        <meta name="twitter:card" content="soft paie" />
        <meta name="robots" content="index, follow" />

        <title>wise-consult</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <TndevProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} key={router.route} />
            </Layout>
          </ThemeProvider>
        </TndevProvider>
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      </QueryClientProvider>
    </>
  );
}

export default App;
