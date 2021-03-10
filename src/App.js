import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import TeamDetails from "./Components/TeamDetails/TeamDetails";


function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;