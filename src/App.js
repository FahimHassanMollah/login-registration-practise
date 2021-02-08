import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
