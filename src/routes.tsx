import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Placas from './pages/Placas/index';




function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/veiculo/:name" component={Placas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
