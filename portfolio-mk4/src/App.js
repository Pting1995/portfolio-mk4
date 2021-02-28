import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
// import project from "./pages/project.js";
import NavBar from "./components/NavBar/index.js";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/aboutme"]} component={AboutMe} />
          {/* <Route exact path="/project" component={project} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;