import React from "react";
import Routes from "@routes";
import { login } from "@config";
import { ApolloProvider } from "react-apollo";
import client from "./helpers/apolloClient";
import "antd/dist/antd.css";
import "./style.scss";

const Main = () => (
    <div>
        <div className="header">
            <span>{login}'s</span> repositories
        </div>
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
    </div>
);

export default Main;