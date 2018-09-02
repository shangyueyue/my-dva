import React from 'react';
import { Route, Switch } from 'dva/router';
import TabBarNav from '@/components/TabBarNav/TabBarNav';
import WaitDeal from '../waitDeal/WaitDeal';
import HaveDeal from '../haveDeal/HaveDeal';
import Search from '../search/Search';
import style from './style.less'


class Main extends React.Component {
  renderContent() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={WaitDeal} />
          <Route path="/haveDeal" component={HaveDeal} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <div>
          {this.renderContent()}
          <TabBarNav />
      </div>
    );
  }
}


export default Main;
