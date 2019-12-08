import React, { Component } from "react";
import Repos from "@components/Repos";
import Preloader from "@components/Preloader";
import data from "./data";
import { get } from "lodash";

@data
class ReposList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const repos = get(this, 'props.data.repositoryOwner.repositories.nodes');

        return (repos
            ? <Repos repos={repos}/>
            : <Preloader/>
        );
    }
}

export default ReposList;