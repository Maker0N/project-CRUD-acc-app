import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import MainForm from "./mainForm";
import MainEdit from "./mainEdit";
import SearchResult from "./searchResult";
import Footer from "./footer";

const App = (props) => {
  // debugger
  return (
    <BrowserRouter>
      <Header
        state={props.state.taskReducer}
        dispatch={props.dispatch}
        createSearchList={props.createSearchList}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              state={props.state.taskReducer}
              dispatch={props.dispatch}
              deleteItem={props.deleteItem}
            />
          )}
        />
        <Route
          exact
          path="/form"
          render={() => (
            <MainForm
              state={props.state.taskReducer}
              dispatch={props.dispatch}
              addNewItem={props.addNewItem}
            />
          )}
        />
        <Route
          exact
          path="/edit/:number"
          render={() => (
            <MainEdit
              state={props.state.taskReducer}
              dispatch={props.dispatch}
              editItem={props.editItem}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchResult
              state={props.state.taskReducer}
              dispatch={props.dispatch}
              deleteItem={props.deleteItem}
            />
          )}
        />
      </Switch>
      <Footer state={props.state.taskReducer} />
    </BrowserRouter>
  );
};

export default App;
