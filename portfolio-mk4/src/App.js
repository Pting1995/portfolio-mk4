import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/project.js";
import NavBar from "./components/NavBar/index.js";
import ModalAboutMe from "./components/ModalAboutMe";
import ModalContactMe from "./components/ModalContactMe";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ModalAboutMe />
        <ModalContactMe />
        <Switch>
          <Route exact path={["/", "/aboutme"]} component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;