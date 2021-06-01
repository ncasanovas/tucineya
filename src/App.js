<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
=======

>>>>>>> main
=======
import React, { useState } from "react";
>>>>>>> 0ae98a4c750162365b825502c68e3fb3bb3237c2
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> main

import { Home } from "./components/Home";
import { Registro } from "./components/Registro";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

import { MoviesContext } from "./components/MoviesContext";

export const App = () => {
  const [moviesContext, setMoviesContext] = useState();
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
          <MoviesContext.Provider value={{ moviesContext, setMoviesContext }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/registro" exact component={Registro} />
              <Route path="/admin" exact component={Admin} />
            </Switch>
          </MoviesContext.Provider>
        </Router>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
