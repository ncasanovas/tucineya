import React, { useEffect, useReducer } from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { Logged } from "./routers/Logged";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

export const App = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <Router>
          <Switch>
            <AuthContext.Provider value={{ state, dispatch }}>
              <Route path="/" exact component={Home} />
              <Logged />
            </AuthContext.Provider>
          </Switch>
        </Router>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
