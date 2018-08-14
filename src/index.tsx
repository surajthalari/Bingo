import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router,Route} from 'react-router-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/winner" component={/components/Winner}/>
  </div>
</Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
