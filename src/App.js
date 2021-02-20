import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
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
              <Route exact path="/portfolio" component={HomePage} />
              <Route exact path="/portfolio/about" component={AboutPage} />
              <Route exact path="/portfolio/work" component={PortfolioPage} />
              <Route exact path="/portfolio/resume" component={ResumePage} />
              <Route exact path="/portfolio/contact" component={ContactPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
