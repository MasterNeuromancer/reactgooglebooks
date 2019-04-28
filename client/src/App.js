import React, { Component } from 'react';
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <ul>
            <li>
              <Link to="/">See Books</Link>
            </li>
            <li>
              <Link to="/add">Add Book</Link>
            </li>
            <li>
              <Link to="/books/search">Search for Book</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/books/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
     
    )
  }
}


export default App;
