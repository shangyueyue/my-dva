import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';
// import { ScrollContext } from 'react-router-scroll-4';
import ScrollContext from './components/scroll/ScrollContext';
import HaveDeal from './routes/haveDeal/HaveDeal';
import ApplicationPage from './routes/application/ApplicationPage';
import Main from './routes/main';

function RouterConfig() {
  return (
    <Router>
      <ScrollContext>
        <Switch>
          <Route path="/applicationPage" component={ApplicationPage} />
          <Route path="/haveDeal" component={HaveDeal} />
          <Route path="/" component={Main} />
        </Switch>
      </ScrollContext>
    </Router>
  );
}

export default RouterConfig;
