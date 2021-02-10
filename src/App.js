import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ContactPage from "./pages/ContactPage/ContactPage";

import "./App.css";

function App() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={location.pathname}
            timeout={450}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/resume" component={ResumePage} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
