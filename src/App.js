import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import { GiCrestedHelmet } from 'react-icons/gi';


function App() {
  return (
    <div className="App">
      <Router >
        <AppBar position="sticky" style={{ background: '#5FAD64' }}>
          <Toolbar>
            <Typography variant="h5">
              <GiCrestedHelmet style={{fontSize: 'xx-large'}}/> League Of Legends
            </Typography>
          </Toolbar>
        </AppBar>

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