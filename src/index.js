import React, { Component } from "react";
import { render } from "react-dom";
import Main from "@containers/Main";

render(
    <Main/>,
    document.getElementById('wrap')
);

module.hot.accept();