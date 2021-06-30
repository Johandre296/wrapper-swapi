// import "../styles/App.css";
import  Person  from "./Person";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import  Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App backgroundImage" >
        <Navbar/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route exact path="/person/:page/:name">
            <Person/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


