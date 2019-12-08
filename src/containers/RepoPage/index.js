import React, { Component } from "react";
import Repo from "@components/Repo";
import Preloader from "@components/Preloader";
import data from "./data";

@data
class RepoPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { node: repo } = this.props.data;

        return (repo
            ? <Repo repo={repo}/>
            : <Preloader/>
        );
    }
}

export default RepoPage;