import React from "react";
import "./style.scss";
import { login } from "@config";

const Commit = ({ commit, repoName }) => {
    const id = commit.oid.slice(0, 8);
    const link = `https://github.com/${login}/${repoName}/commit/${commit.oid}`;

    return (
        <div className="repo-commit">
            <img src={commit.author.avatarUrl}/>
            <span>{commit.messageHeadline}</span>
            <a href={link} target="_blank" className="repo-commit-link">{id}</a>
        </div>
    );
}

export default Commit;