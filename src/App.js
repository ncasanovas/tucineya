
import React, { useState } from "react";

import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



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

      <div>

     

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
