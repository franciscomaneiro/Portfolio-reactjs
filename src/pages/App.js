import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import MainPage from "./MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
