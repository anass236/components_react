import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import TestApp from "./TestApp";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles/app.scss";
//import Routes from "./routes";

ReactDOM.render(<TestApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
