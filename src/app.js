import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import MainForm from "./mainForm";
import Footer from "./footer";

const App = (props) => {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main state={props.state} deleteItem={props.deleteItem} />} />
          <Route exact path="/form" render={() => <MainForm state={props.state} addNewItem={props.addNewItem}/>} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
