import {
  createContext,
  createRef,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ShootingStars from "./components/ShootingStars/ShootingStars";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import "./App.css";

type BoolState = [boolean, Dispatch<SetStateAction<boolean>>];
type StringState = [string, Dispatch<SetStateAction<string>>];

export const ModalContext = createContext<BoolState>([false, () => {}]);
export const AppContext = createContext<StringState>(["", () => {}]);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [appTitle, setAppTitle] = useState("");
  const location = useLocation();
  const nodeRefs = useRef(new Map<string, RefObject<HTMLDivElement | null>>());

  if (!nodeRefs.current.has(location.pathname)) {
    nodeRefs.current.set(location.pathname, createRef<HTMLDivElement>());
  }
  const nodeRef = nodeRefs.current.get(location.pathname)!;

  return (
    <ModalContext.Provider value={[modalOpen, setModalOpen]}>
      <AppContext.Provider value={[appTitle, setAppTitle]}>
        <ShootingStars />
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={450}
            classNames="fade"
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </AppContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
