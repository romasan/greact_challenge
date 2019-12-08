import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { login } from "@config";
import "./style.scss";
const { Meta } = Card;

class RepoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, id } = this.props.repo;
        const link=`/repo/${id}`;

        return <Link to={link} className="card-wrap">
            <Card
                hoverable
                cover={
                    <span className="card-cover" style={{
                        backgroundImage: `url(http://${login}.github.io/${name}/preview/320x320.jpg)`
                    }}></span>
                }
            >
                <Meta
                    title={name}
                    description={description || 'Empty description'}
                />
            </Card>
        </Link>;
    }
}

export default RepoCard;