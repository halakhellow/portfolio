import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ShootingStars from "./components/ShootingStars/ShootingStars";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ContactPage from "./pages/ContactPage/ContactPage";

import "./App.css";

export const ModalContext = React.createContext(null);
export const AppContext = React.createContext(null);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [appTitle, setAppTitle] = useState("");
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component="div" className="App">
          <ModalContext.Provider value={[modalOpen, setModalOpen]}>
            <AppContext.Provider value={[appTitle, setAppTitle]}>
              <ShootingStars />
              <CSSTransition
                key={location.pathname}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/portfolio" component={HomePage} />
                  <Route path="/portfolio/about" component={AboutPage} />
                  <Route path="/portfolio/work" component={PortfolioPage} />
                  <Route path="/portfolio/resume" component={ResumePage} />
                  <Route path="/portfolio/contact" component={ContactPage} />
                </Switch>
              </CSSTransition>
            </AppContext.Provider>
          </ModalContext.Provider>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
