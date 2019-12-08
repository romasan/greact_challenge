import React, { Component } from "react";
import PropTypes from "prop-types";
import Block from "../Block";
import { humanTimeAgo } from "../../helpers/humanTime";

class UpdatedAt extends Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        timer: PropTypes.number,
    }

    render() {
        return <Block title="Обновлено">
            {this.context.timer && humanTimeAgo(this.props.children)}
        </Block>;
    }
}

export default UpdatedAt;