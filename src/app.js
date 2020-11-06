import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import MainForm from "./mainForm";
import MainEdit from "./mainEdit";
import SearchResult from "./searchResult";
import Footer from "./footer";

const App = () => {
  // debugger
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/form" render={() => <MainForm />} />
        <Route exact path="/edit/:number" render={() => <MainEdit />} />
        <Route exact path="/search" render={() => <SearchResult />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
