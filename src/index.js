import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
