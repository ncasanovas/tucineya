import React from "react";
import { BrowserRouter, HashRouter as Router, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Registro } from "./components/Registro";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/registro" exact component={Registro} />
        </div>
      </Router>
      <Footer />
    </BrowserRouter>
  );
};
