import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Saved from "../components/Saved";
import Search from "../components/Search";
import Results from "../components/Results";

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            
            {/*<Route path="search" component={Search}/>
            <Route path="saved" component={Saved}/>
            <Route path="results" component={Results}/>
            
            <IndexRoute component={Search}/>*/}
        </Route>
    </Router>
);

export default routes;
