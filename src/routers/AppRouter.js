import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import StyleGuidePage from '../components/StyleGuidePage';
import TestPage from '../components/TestPage';

const AppRouter = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/" exact component={TestPage}/>
      <Route path="/style" component={StyleGuidePage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
