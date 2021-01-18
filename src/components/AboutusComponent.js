import React from 'react';

export function Team() {
    return(
        <div className="container">
            <h1>Meet The Team</h1>
            <div className="container profile-card">
                <div className="col">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="./images/picture of brian.jpg" alt="Picture of Brian" />
                                <h4>Brian</h4>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis rerum ipsum quidem odio quod!</p>
                                <a href="https://accounts.myherbalife.com/Account/Create" className='card-link'>Sign up with Brian!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="./images/picture of john.jpg" alt="Picture of John" />
                                <h4>John</h4>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis rerum ipsum quidem odio quod!</p>
                                <a href="https://accounts.myherbalife.com/Account/Create" className='card-link'>Sign up with John!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="./images/picture of andy.jpg" alt="Picture of Andy" />
                                <h4>Andy</h4>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis rerum ipsum quidem odio quod!</p>
                                <a href="https://accounts.myherbalife.com/Account/Create" className='card-link'>Sign up with Andy!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form>
                <h2>Ask Us Your Questions!</h2>
                <div className="row">
                    <div className="col">
                        <label className="form-check-label" htmlFor="first name">First Name</label>
                        <input type="text" className="form-control form-control-lg" id="first name" placeholder="First name" />
                    </div>
                    <div className="col">
                    <label className="form-check-label" htmlFor="last name">Last Name</label>
                    <input type="text" className="form-control form-control-lg" id="last name" placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="becoming a distributor" id="becoming a distributor" />
                            <label className="form-check-label" htmlFor="becoming a distributor">
                            Becoming a Distributor
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="general" id="general" />
                            <label className="form-check-label" htmlFor="general">
                            General Questions & Concerns
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label for="text area">Message</label>
                            <textarea className="form-control form-control-lg" id="text area" rows="4" placeholder="Your questions here!"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
};