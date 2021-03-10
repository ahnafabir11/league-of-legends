import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import { GiCrestedHelmet } from 'react-icons/gi';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NotFound from './Components/PageNotFound/NotFound';


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
          <Route exact path="/details/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;