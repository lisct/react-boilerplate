import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BoilerplatePage from '../components/BoilerplatePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={BoilerplatePage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
