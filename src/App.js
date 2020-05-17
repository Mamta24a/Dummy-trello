import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './containers/Header/Header';
import WoDnd from './containers/WoDnd/Boards/Boards';
import Dnd from './containers/Dnd/Boards/Boards';

function App() {

  if (window.location.pathname === "/") {
    window.location.replace("/wodnd");
  }

  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Route path={["/wodnd"]} component={WoDnd} />
          <Route path={["/dnd"]} component={Dnd} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
