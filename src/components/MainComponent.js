import React from 'react';
import Header from './HeaderComponent';
import HomeCards from './HomeComponent';
import Menu from './OurMenuComponent';
import { Team } from './AboutusComponent';
import { Route, Switch, Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom';



function Main() {
        return (
            <Router>
                <div className="Main">
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/ourmenu' component={Menu} />
                        <Route path='/aboutus' component={Team} />
                    </Switch>
                </div>
            </Router>
        );
}

const Homepage = () => (
    <div>
        <HomeCards />
    </div>
);

export default Main;