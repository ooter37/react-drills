import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Signup from './Components/Signup'

export default <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/details' component={Details}/>
</Switch>