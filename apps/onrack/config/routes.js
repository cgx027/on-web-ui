'use strict';

import React from 'react';
import Router, { Route, Redirect, NotFoundRoute, DefaultRoute } from 'react-router';
import onReady from 'common-web-ui/lib/onReady';

import { MenuItem } from 'material-ui';
import NotFound from 'common-web-ui/views/NotFound';
import UserLogin from 'common-web-ui/views/UserLogin';
import GraphCanvas from 'common-web-ui/views/GraphCanvas';

// See http://material-ui.com/#/components/left-nav
export var navigation = [
  { text: 'Dashboard', route: '/' },
  { text: 'Login', route: 'login' },
  { text: 'Objects', type: MenuItem.Types.SUBHEADER },
  { text: 'Chassis', route: 'chassis' },
  { text: 'Systems', route: 'systems' },
  { text: 'Other', type: MenuItem.Types.SUBHEADER },
  { text: 'EMC', type: MenuItem.Types.LINK, payload: 'http://emc.com' }
];

// Must be imported after navigation.
import App from '../views/App';

import { ChassisCollection, ChassisDetails } from '../views/Chassis';
import { SystemsCollection, SystemDetails } from '../views/Systems';
import Dashboard from '../views/Dashboard';

import featureFlag from 'common-web-ui/lib/featureFlag';
const devFlag = featureFlag('dev');

// See http://rackt.github.io/react-router/
let routes = (
  <Route name="root" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="chassis" handler={ChassisCollection} />
    <Route name="case" path="/chassis/:chassisId" handler={ChassisDetails} />
    <Route name="systems" handler={SystemsCollection} />
    <Route name="system" path="/systems/:systemId" handler={SystemDetails} />
    <Route name="login" handler={UserLogin} />
    { !devFlag.check() ? null :
      <Route name="map" handler={GraphCanvas} />
    }
    <NotFoundRoute handler={NotFound}/>
    <Redirect from="dash" to="/" />
  </Route>
);

// Router configuration
let params = {
  routes,
  scrollBehavior: Router.ScrollToTopBehavior
};

// Run the application when both DOM is ready and page content is loaded
onReady(() =>
  Router.create(params).run(
    Handler => React.render(<Handler />, document.body)));
