import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReposList from "@containers/ReposList";
import RepoPage from "@containers/RepoPage";

const Routes = () => (
    <Router>
        <Route exact path="/" component={ReposList}/>
        <Route path="/repo/:id" component={RepoPage}/>
    </Router>
);

export default Routes;