import React, { Component } from 'react';

function Menu() {
    return (
        <div className="container">
            <div className="col col-md-10 col-lg-8 mx-auto">
                <div className="card menu-card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">Welcome</h5>
                                <ol>
                                    <li className="mb-2">Pick a Tea</li>
                                    <li className="mb-1">Pick a Shake</li>
                                    <h6 className="card-subtitle mb-1">* = Includes Nut Ingredients</h6>
                                    <li>Sign In</li>
                                </ol>
                            </div>
                            <div className="col tea-list">
                                <h5>Teas</h5>
                                <ul className="list-unstyled">
                                    <li>Peach</li>
                                    <li>Raspberry</li>
                                    <li>Lemon</li>
                                    <li>Razzy Lemon</li>
                                    <li>Pomegranate</li>
                                    <li>Arnie</li>
                                    <li>Razzy Peach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col col-md-8 col-lg-6 mx-auto">
                <div className="card menu-card">
                    <div className="card-body">
                        <h5 className="card-title">A Few Thigs to Know</h5>
                        <p className="card-text">Shakes are Approximately 350 calories each</p>
                        <p className="card-text">Each shake has 24+ grams of Protein </p>
                        <p className="card-text">Cash or check only Credit cards accepted for punch cards only!</p>
                        <a href="https://b-m.facebook.com/Active-Energy-181432185206076/" className="card-link"><i className="fa fa-check-circle card-link"></i> Check in with us on Facebook!</a>
                    </div>
                </div>
            </div>

            <section className="my-5">
            <h2>Pick a Flavor</h2>
                <div className="row">
                    <div className="col">
                        <h3>Vanilla</h3>
                        <ul className="list-unstyled">
                            <li>Blueberry Muffin*</li>
                            <li>Elvis*</li>
                            <li>Cheesecake (Strawberry, Blueberry, Raspberry, Lemon, Cherry, Almond)</li>
                            <li>Banana Cream Pie</li>
                            <li>Pistachio Muffin*</li>
                            <li>Pistachio*</li>
                            <li>Apple Crisp</li>
                            <li>Banana Bread*</li>
                            <li>Strawberry Banana</li>
                            <li>Orange Julius</li>
                            <li>Carmel Roll</li>
                            <li>Chelsie</li>
                            <li>Angel Food Cake</li>
                            <li>Key Lime Pie</li>
                            <li>Strawberry Shortcake</li>
                            <li>Cherry Dilly Bar</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Cookies & Cream</h3>
                        <ul className="list-unstyled">
                            <li>Snickers*</li>
                            <li>Butterfingers*</li>
                            <li>Heath Blast</li>
                            <li>Peanut Butter Cup*</li>
                            <li>White Chocolate PB Cup</li>
                            <li>Rice Krispie Treat</li>
                            <li>Oreo Blast</li>
                            <li>Tagalong*</li>
                            <li>Samoa</li>
                            <li>Monster Cookie*</li>
                            <li>Oatmeal Cookie</li>
                            <li>Chocolate No Bake Cookie*</li>
                            <li>Snicker Doodle</li>
                            <li>Salted Nut Roll*</li>
                            <li>Cinnamon Roll</li>
                            <li>White Wedding Cake</li>
                            <li>Pineapple Upside-Down Cake*</li>
                            <li>German Chocolate Cake</li>
                            <li>Scotch-a-Roo</li>
                            <li>Turtle Cheesecake</li>
                            <li>Smore</li>
                            <li>Puppy Chow</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Cafe Latte</h3>
                        <ul className="list-unstyled">
                            <li>Cafe Mocha Capuccino</li>
                            <li>Peanut Butter Latte*</li>
                            <li>Carmael Latte</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Chocolate</h3>
                        <ul className="list-unstyled">
                            <li>Chocolate Peanut</li>
                            <li>Butter Banana*</li>
                            <li>Almond Joy*</li>
                            <li>Chocolate Strawberry</li>
                            <li>Chocolate Banana</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Chocolate Mint</h3>
                        <ul className="list-unstyled">
                            <li>Oreo Mint</li>
                            <li>Green Chocolate Mint</li>
                            <li>Chocolate Mint</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Wild Berry</h3>
                        <ul className="list-unstyled">
                            <li>Wildberry Surprise</li>
                            <li>Orange Strawberry Banana</li>
                            <li>Strawberry Delight</li>
                            <li>Blueberry</li>
                            <li>Raspberry Banana</li>
                        </ul>
                    </div>
                </div>
            </section>


            <h2>Our Ingredients</h2>
            <div className="row row-content">
                <div className="col">
                    <div className="card menu-card">
                        <div className="row">
                        <div className="col-md-4">
                            <img src="./images/Formula1-Herbalife-image.png" className="card-img d-none d-md-block mx-3" alt="Image of formula one" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">Formula One</h5>
                            <p className="card-text">Treat your body to a healthy, balanced meal in no time! Not only are these shakes easy to make, they’re also delicious. With up to 21 essential vitamins and minerals – and in a variety of flavors – weight management never tasted so good! Part of the Herbalife Nutrition.</p>
                            <h5 className="card-subtitle">Key Benefits</h5>
                            <ul>
                                <li>A healthy meal with up to 21 vitamins and minerals and essential nutrients.</li>
                                <li>9 g of protein and fiber help support weight management.</li>
                                <li>0 cholesterol; 0 trans fats</li>
                                <li>Formula 1 gives you protein and balanced nutrition.</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-content align-self-center">
                <div className="col">
                    <div className="card menu-card">
                        <div className="row">
                        <div className="col-md-4">
                            <img src="./images/PDM image.jpg" className="card-img d-none d-md-block mx-3" alt="Image of PDM" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">Protein Drink Mix</h5>
                            <p className="card-text">Satisfy your hunger and stay energized with the power of protein! Add Protein Drink Mix to your favorite Formula 1 shake to boost your protein intake to 24 g (without the addition of milk) or mix with water for a nutritious protein snack.</p>
                            <h5 className="card-subtitle">Key Benefits</h5>
                            <ul>
                                <li>24 vitamins and minerals.</li>
                                <li>15 g of soy protein per serving.</li>
                                <li>5 g of carbs per serving.</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Menu;