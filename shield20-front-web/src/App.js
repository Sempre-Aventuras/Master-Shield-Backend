import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';
import WellcomeScreen from './screens/WellcomeScreen';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <WellcomeScreen />

      <Router>
        <Switch>
          <Route exact path="/home">
              <HomeScreen />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
