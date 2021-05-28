import React from "react";
<<<<<<< HEAD
=======

>>>>>>> main
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> main

import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./components/Home";
import { Registro } from "./components/Registro";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

export const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div>
=======
      <Header />
      <Router basename={window.location.pathname || ''}>
>>>>>>> main
        <div>
          <Header />
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/registro" exact component={Registro} />
            <Route path="/admin" exact component={Admin} />
          </Switch>
        </Router>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
