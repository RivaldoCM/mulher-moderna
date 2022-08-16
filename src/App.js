import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/header";
import { MainRoutes as Routes} from './routes';
import { GlobalStyle } from "./styles/global";

import { makeServer } from "./miragejs";

if (process.env.NODE_ENV === 'development'){
  require("./miragejs/index").makeServer();
}

export function App() {

  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
