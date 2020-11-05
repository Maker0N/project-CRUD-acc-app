import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import store from './redux/store'

let rerender = (state) => {
  const root = document.querySelector("#root");
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch}
    />,
    root
  );
};
console.log(store.getState());

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state);
})
