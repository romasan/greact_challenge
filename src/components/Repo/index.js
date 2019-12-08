import React, { Component } from "react";
import { Link } from "react-router-dom";
import Clock from "./components/ClockProvider";
import BlockUpdatedAt from "./components/UpdatedAt";
import Block from "./components/Block";
import Commit from "./components/Commit";
import { login } from "@config";
import { get } from "lodash";
import "./style.scss"

class Repo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, updatedAt, sshUrl, ref } = this.props.repo || {};
        const commitsTotal = get(ref, 'target.history.totalCount', 0);
        const commits = get(ref, 'target.history.edges', []);
        const link = `https://github.com/${login}/${name}`;

        return  <div className="repo-content">
            <Link to="/" className="back-btn">Назад</Link>
            <Clock>

                <Block title="Название"><h1>{name}</h1></Block>
                <Block title="Описание">{description}</Block>
                <BlockUpdatedAt>{updatedAt}</BlockUpdatedAt>
                <Block title="Ссылка">
                    <a href={link} target="_blank">{link}</a>
                </Block>
                <Block title="Клонировать по SSH">
                    <blockquote>git clone {sshUrl}</blockquote>
                </Block>
                <Block title={`Последние ${commits.length} коммитов из ${commitsTotal}`}>
                    <div className="commits">
                        {commits.map(edge => (
                            <Commit
                                repoName={name}
                                commit={edge.node}
                                key={edge.node.oid}
                            />
                        ))}
                    </div>
                </Block>

            </Clock>
        </div>
    }
}

export default Repo;