import React from 'react'
import { Switch, Route, } from 'react-router-dom';
import './App.css'
import Header from './Header'
import PizzaForm from './PizzaForm';
import HomeBanner from './Home';
import Success from './Success';


function App() {


  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomeBanner />
        </Route>
        <Route exact path="/siparis">
          <PizzaForm />
        </Route>
        <Success />
      </Switch>
    </>
  )
}



export default App;

