// import "../styles/App.css";
import  Person  from "./Person";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import  Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App backgroundImage">
        <div style={{ position: "absolute", top: "0" }}>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <div style={{ position: "absolute", top: "200px" }}>
              <Home />
            </div>
          </Route>
          <Route exact path="/person/:page/:name">
            <div style={{ position: "absolute", top: "200px" }}>
              <Person />
            </div>
          </Route>
          <Route exact path="/about">
            <div style={{ position: "absolute", top: "200px" }}>
              <About />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


