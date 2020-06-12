import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from '../src/Components/Body'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path='/' exact component={Body} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
