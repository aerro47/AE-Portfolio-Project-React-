import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeCards from './HomeComponent';
import Menu from './OurMenuComponent';
import { Team } from './AboutusComponent';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';



function Main() {
        return (
            <Router>
                <div className="Main">
                    <Header />
                    <Switch>
                        <Route path='/home' exact component={Homepage} />
                        <Route path='/ourmenu' component={Menu} />
                        <Route path='/aboutus' component={Team} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
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