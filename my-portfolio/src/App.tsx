import React from "react";
import "./App.css";
import { NavBar } from "./components";
import {
  LandingPage,
  FavnapmPage,
  CurrentProject,
  CurrentWorkStatus,
  WorkAndContact,
} from "./pages";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Switch>
          //setting-up default route
          <Route exact path="/">
            <Redirect to="/about-me" />
          </Route>
          <Route exact path={"/about-me"}>
            <LandingPage />
          </Route>
          <Route exact path={"/worked-on-lib"}>
            <FavnapmPage />
          </Route>
          <Route exact path={"/current-project"}>
            <CurrentProject />
          </Route>
          <Route exact path={"/current-work-status"}>
            <CurrentWorkStatus />
          </Route>
          <Route exact path={"/works-and-contact"}>
            <WorkAndContact />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
