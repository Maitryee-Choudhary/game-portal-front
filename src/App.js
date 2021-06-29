
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  
    <div className="App">
      <Router>
		<Navbar />
        <Switch>
          <Route path="/login">
            <p>Login</p>
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
