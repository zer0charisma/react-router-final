import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./common/NotFound";
import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route path="/" exact>
          <CardList />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
