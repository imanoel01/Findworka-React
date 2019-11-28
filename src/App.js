import React,  {Component} from 'react'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Topnavigation from './Topnavigation'
import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Services } from './Services';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import Footer from './Footer';
import Maincontent from './Maincontent';


class App extends Component{
  render(){
    return(


      <div>
      {/* <Router>
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route  path="/about" Component={About} />
          <Route  path="/contact" Component={Contact} />
          <Route  path="/portfolio" Component={Portfolio} />
          <Route  path="/services" Component={Services} />
          <Route  Component={NoMatch} />

        </Switch>
      </Router> */}

 


<Topnavigation/>
<Maincontent/>
<Footer/>
</div>
    )
      

    
  }
}

export default App;