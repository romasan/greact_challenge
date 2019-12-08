import React from "react";
import "./style.scss";

const Block = props => (
    props.title && props.children &&
    <div className="repo-block">
        <div className="repo-block-title">{props.title}</div>
        <div className="repo-block-content">{props.children}</div>
    </div>
);

export default Block;