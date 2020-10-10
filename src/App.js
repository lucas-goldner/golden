import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <Router>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
