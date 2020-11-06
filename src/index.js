import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app";
import store from "./redux/store";

let rerender = (state) => {
  const root = document.querySelector("#root");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    root
  );
};
console.log(store.getState());

rerender(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerender(state);
// });
