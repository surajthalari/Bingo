/*tslint:disable*/
import * as React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './App.css';
import { ActualApp } from './components/ActualApp';
// import {BrowserRouter,Route} from "react-router-dom" 



class App extends React.Component {
  
   Winner = ({ match }:{match:any}) => (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
  
  public render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ActualApp}/>
      <Route path="/winner/:user" component={this.Winner}/>
      </Switch>
      </BrowserRouter>
    );
  }
}




export default App;
