import React from "react";
import "./App.css";
import {MenuBar} from './components'
import { LandingPage, FavnapmPage } from "./pages";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <MenuBar/>
        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
          </Route>
          <Route exact path={"/favnpm"}>
            <FavnapmPage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
