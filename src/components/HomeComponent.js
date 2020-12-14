import React, { Component } from 'react';
import MapContainer from './MapLocation';
import { Card, CardBody, CardTitle, CardDeck } from 'reactstrap';

class HomeCards extends Component {

    render () {
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <h2>Welcome to Active Energy!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias voluptates mollitia et doloribus laudantium itaque, repellat cumque nostrum! Facilis optio repellat at voluptatibus voluptatem quaerat maiores natus est fuga.</p>
                    </div>
                </div>



                <Card>
                    <CardDeck>
                        <div className="card menu-card">
                            <CardBody>
                                <CardTitle>News</CardTitle>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                        <div className="card menu-card">
                            <CardBody>
                                <CardTitle>Our Mission</CardTitle>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                        <div className="card menu-card">
                            <CardBody>
                                <CardTitle>Community Feedback</CardTitle>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                    </CardDeck>
                </Card>

                <h2>Location</h2>
                <MapContainer />
            </React.Fragment>
        );
    }
};

export default HomeCards;