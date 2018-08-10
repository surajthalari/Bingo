import * as React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';



class App extends React.Component {
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

export default App;
