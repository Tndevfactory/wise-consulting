/** @format */
import FormData from "form-data";
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const TndevContext = createContext(null);

export const TndevCtx = () => {
  return useContext(TndevContext);
};

const BASE_URL_SERVER = "http://localhost:8000/api";
const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: BASE_URL_SERVER,
});

api.interceptors.request.use(function (config) {
  config.headers = { "X-Requested-With": "XMLHttpRequest" };
  config.headers = { Accept: "application/json" };
  config.headers = { "content-type": "application/json" };

  const token = Cookies.get("wise_token") ? Cookies.get("wise_token") : null;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// checkerController user and auth handler

export const apiListeArticles = async () => {
  const { data } = await api.get("/articles");
  return data;
};

const authMethods = {
  apiListeArticles,
};

export const TndevProvider = ({ children }) => {
  const methods = {
    authMethods,
  };

  const [darkColor, setDarkColor] = useState("0");

  const states = {
    darkColor,
    setDarkColor,
  };

  return (
    <TndevContext.Provider value={[methods, states]}>
      {children}
    </TndevContext.Provider>
  );
};
