import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import state, { addNewItem, deleteItem, editItem, createSearchList, subscriber } from "./redux/state";

let rerender = (state) => {
  const root = document.querySelector("#root");
  ReactDOM.render(
    <App
      state={state}
      addNewItem={addNewItem}
      deleteItem={deleteItem}
      editItem={editItem}
      createSearchList={createSearchList}
    />,
    root
  );
};

rerender(state);

subscriber(rerender);
