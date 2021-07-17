
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Gamepage from './components/Gamepage';
import JitsiComponent from './components/jitsi/jitsi.component';
import ThankYouComponent from './components/thank-you/thank-you.component';
function App() {
  return (
  
    <div className="App">
		
      <Router>
		<Navbar />

        <Switch>
          <Route path="/login">
            
			<Login />
          </Route>
		  
		  <Route path="/game">
            
			<Gamepage />
          </Route>
		  
		  <Route className="jitsi" component={JitsiComponent} path="/jit" exact />
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
