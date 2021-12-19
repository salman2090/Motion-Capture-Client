import './App.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
      <Route path="/home">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
