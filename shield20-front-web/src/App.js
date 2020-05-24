import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// CSS
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';

// Pages
import WellcomeScreen from './screens/WellcomeScreen';
import HomeScreen from './screens/HomeScreen';

// Character Pages
import NewCharacterScreen from './screens/Character/NewCharacterScreen';
import MyCharacterScreen from './screens/Character/MyCharacterScreen';


function App() {
  return (
    <>
      <WellcomeScreen />

      <Router>
        <Switch>
          <Route exact path="/home">
              <HomeScreen />
          </Route>

          <Route exact path="/character/new">
              <NewCharacterScreen />
          </Route>
          <Route exact path="/character/my">
              <MyCharacterScreen />
          </Route>          
        </Switch>
      </Router>

    </>
  );
}

export default App;
