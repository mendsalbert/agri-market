import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "https://smart-farm-wanhive.herokuapp.com";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
