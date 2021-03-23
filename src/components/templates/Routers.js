import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Aboutus from '../pages/Aboutus';
import Contactus from '../pages/Contactus';
import Features from '../pages/Features';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
function Routers() {

    return (

        <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/aboutus" component={Aboutus }></Route>
                <Route path="/contactus" component={Contactus}></Route>
                <Route path="/features" component={Features}></Route>
                <Route path='/pricing' component={Pricing}></Route>
            </Switch>
        </>
    )
}

export default Routers