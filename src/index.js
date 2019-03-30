import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { Provider } from "react-redux";
import reducers from "./reducer";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
