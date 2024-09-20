import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import transactionReducer from "./store/transactionReducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: {
    transactions: transactionReducer
  }
});
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
