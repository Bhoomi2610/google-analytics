import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation, Switch, Route } from 'react-router-dom';
import { Navbar, NavItem, Nav, NavLink } from 'reactstrap';
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import './App.css';

const App = () => {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [])
  return (<Router>
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>)
}

export default App;
