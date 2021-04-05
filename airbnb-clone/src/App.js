import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />

      <Switch>
        <Route path='/search' exact component={SearchPage}/>
        <Route path='/'>
        <Home />
        </Route>
      </Switch>

      <Footer  />
      </Router>
      
    </div>
  );
}

export default App;
