import './App.css';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Register from './pages/register';
import Login from './pages/login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/rooms">
              <Rooms></Rooms>
            </Route>
           
            <Route path="/signup">
              <Register></Register>
            </Route>
            
            <Route path="/login">
              <Login></Login>
            </Route>

            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
