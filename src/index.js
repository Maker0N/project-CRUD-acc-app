import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import state, { addNewItem, deleteItem, editItem, subscriber } from "./redux/state";

let rerenderTree = (state) => {
  const root = document.querySelector("#root");
  ReactDOM.render(<App state={state} addNewItem={addNewItem} deleteItem={deleteItem} editItem={editItem} />, root);
};

rerenderTree(state);

subscriber(rerenderTree);
