import React from 'react';
import './routing.css';
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MealCategories from './MealCategories';
import MealHome from './MealHome';
import MealOrder from './MealOrder';
import MealFeedback from './MealFeedback';
import MealAboutUs from './MealAboutUs';
import MealSeaFood from './MealSeaFood';



export default class MealHeader extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="routing">
                <Router>
                    <ul>
                        <li><Link to="/"><img style={{ height: '30px' }} src="https://i.pinimg.com/originals/dd/9d/c9/dd9dc9d83423bc037b511d73b29e6b80.png"></img></Link></li>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/categories">Categories</Link> </li>
                        <li> <Link to="/order">Order</Link> </li>
                        <li> <Link to="/feedback">Feedback</Link> </li>
                        {/* <li> <Link to="/about">About us</Link> </li> */}
                        <Link to="/seafood"> <button className="btn btn-outline-danger">Check out Sea Food</button></Link>

                    </ul>

                    <Switch>
                        <Route exact path="/">
                            <MealHome/>
                        </Route>
                        <Route path="/categories">
                            <MealCategories />
                        </Route>
                        <Route path="/order">
                            <MealOrder />
                        </Route>
                        <Route path="/feedback">
                            <MealFeedback />
                        </Route>
                        <Route path="/about">
                            <MealAboutUs />
                        </Route>
                        <Route path="/seafood">
                            <MealSeaFood />
                        </Route>
                    </Switch>

                    {/* <Route exact path="/" component={MealHome} />
                    <Route path="/categories" component={MealCategories} />
                    <Route path="/order" component={MealOrder} />
                    <Route path="/feedback" component={MealFeedback} />
                    <Route path="/about" component={MealAboutUs} />
                    <Route path="/seafood" component={MealSeaFood} /> */}

                </Router>

            </div>


        )
    }
}