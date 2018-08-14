import * as React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import './index.css';


export class ActualApp extends React.Component {
    public render() {
      return (
        <div id="one">
          <Header/>
          <hr/>
          <Main/>
          <hr/>
          <Footer/>
        </div>
      );
    }
  }