import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Menu></Menu>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
