
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Gamepage from './components/Gamepage';
function App() {
  return (
  
    <div className="App">
      <Router>
		<Navbar />
        <Switch>
          <Route path="/login">
            <p>Login</p>
			<SignIn />
          </Route>
		  
		  <Route path="/game">
            <p>Game Page</p>
			<Gamepage />
          </Route>
		  
		  <Route path="/">
            <Home />
          </Route>
		  
		  
        </Switch>
		<Footer />
		</Router>
    </div>
  );
}

export default App;
