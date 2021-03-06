import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import App from "./App";
import i18n from "./i18n";
import store from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
