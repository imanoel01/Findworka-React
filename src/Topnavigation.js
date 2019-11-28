import React, {Component} from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Services } from './Services';
import { NoMatch } from './NoMatch';

class Topnavigation extends Component{
render(){
    return(
<div>
        <ul>
            <li> <a className="active" href="#">Home</a></li>
            <li><a patg href="">About</a></li>
            <li><a href="">Portolio</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Services</a></li>

        </ul>

        <Router>
<Switch>

<Route exact path="/" Component={Home} />
          <Route  path="/about" Component={About} />
          <Route  path="/contact" Component={Contact} />
          <Route  path="/portfolio" Component={Portfolio} />
          <Route  path="/services" Component={Services} />
          <Route  Component={NoMatch} />
</Switch>
        </Router>

</div>
    )

}
}
export default Topnavigation;