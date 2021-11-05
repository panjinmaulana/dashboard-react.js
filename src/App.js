import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              Storepedia
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link to="/add-product" class="nav-link" aria-current="page">
                  Add
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-product">
            <AddForm />
          </Route>
          <Route path="/edit-product/:id">
            <EditForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
