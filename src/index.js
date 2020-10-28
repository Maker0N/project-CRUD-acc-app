import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import state, { addNewItem, deleteItem, subscriber } from "./redux/state";

let rerenderTree = (state) => {
  const root = document.querySelector("#root");
  ReactDOM.render(<App state={state} addNewItem={addNewItem} deleteItem={deleteItem} />, root);
};

rerenderTree(state);

subscriber(rerenderTree);
