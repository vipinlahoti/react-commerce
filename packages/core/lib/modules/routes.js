import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../components/layouts/Layout';
import Home from '../components/pages/home/Home';
import Subpage from '../components/pages/subpage/Subpage';

export default (
  <Main>
    <Route exact path="/" component={Home} />
    <Route exact path="/subpage" component={Subpage} />
  </Main>
);
