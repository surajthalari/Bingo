/*tslint:disable*/
import * as React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './App.css';
import { ActualApp } from './components/ActualApp';
import { Winner } from './components/Winner';
// import {BrowserRouter,Route} from "react-router-dom" 



class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ActualApp}/>
      <Route path="/winner" component={Winner}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
