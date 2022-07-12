import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/header";
import { MainRoutes as Routes} from './routes';
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <Router>
      {window.location.pathname !== "/control" ? <Header /> : '' }
      <Routes />

      <GlobalStyle />
    </Router>
  );
}
