import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./routes/Router";
import { TokenProvider } from "./utils/context/token";
import { Provider } from "react-redux";
import storeRedux from "./utils/state/car/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={storeRedux}>
    <TokenProvider>
      <Router />
    </TokenProvider>
  </Provider>
);
