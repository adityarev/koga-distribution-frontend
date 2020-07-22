import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import History from './routes/History';
import Home from './routes/Home';
import Item from './routes/Item';
import Transaction from './routes/Transaction';
import { HISTORY_LINK, ITEM_LINK, TRANSACTION_LINK } from './constants/link';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">KDR</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path={HISTORY_LINK} exact>
            <History/>
          </Route>
          <Route path={ITEM_LINK}>
            <Item/>
          </Route>
          <Route path={TRANSACTION_LINK}>
            <Transaction/>
          </Route>
          <Route>
            Not found!
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
