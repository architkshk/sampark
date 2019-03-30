import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDom.render(<App />, document.getElementById("root"));
serviceWorker.register();
