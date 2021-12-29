import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddCamera from './Pages/Dashboard/AddCamera/AddCamera';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order/:cameraId">
                <OrderDetails></OrderDetails>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/addCamera">
                <AddCamera></AddCamera>
              </Route>
            <Route path="*">
                <NotFound></NotFound> 
            </Route>  
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
