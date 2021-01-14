import React, { Component } from 'react';
import MapContainer from './MapLocation';
import { Card, CardBody, CardDeck } from 'reactstrap';
import CarouselContainer from './CarouselComponent';


class HomeCards extends Component {

    render () {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Welcome to Active Energy!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias voluptates mollitia et doloribus laudantium itaque, repellat cumque nostrum! Facilis optio repellat at voluptatibus voluptatem quaerat maiores natus est fuga.</p>
                    </div>
                </div>
                
                <div className='row'>
                    <CarouselContainer />
                </div>

                <div className="row">
                    <div className= "col">
                <Card>
                    <CardDeck className="card-deck">
                        <div className="card menu-card">
                            <CardBody>
                                <h5>News</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                        <div className="card menu-card">
                            <CardBody>
                                <h5>Our Mission</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                        <div className="card menu-card">
                            <CardBody>
                                <h5>Community Feedback</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae est cupiditate nemo consequatur, obcaecati suscipit, quasi error voluptatibus blanditiis soluta temporibus doloribus. Ea minima quam, blanditiis beatae molestias cupiditate.</p>
                            </CardBody>
                        </div>
                    </CardDeck>
                </Card>
                    </div>
                        
                </div>   
                
                <div className="row">
                    <div className="col">
                        <h2>Location</h2>
                        <MapContainer />
                    </div>
                </div>
            </div>
        );
    }
};

export default HomeCards;