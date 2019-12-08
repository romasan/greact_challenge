import React, { Component } from "react";
import RepoCard from "./components/Card";
import "./style.css";

class Repos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const repos = this.props.repos.filter(repo => !repo.isPrivate);

        return <div className="repos-list">
            { repos.map(repo => <RepoCard repo={repo} key={repo.id}/>) }
        </div>
    }
}

export default Repos;