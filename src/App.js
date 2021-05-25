import React from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./components/Home";
import { Registro } from "./components/Registro";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
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
