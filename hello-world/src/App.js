import React, {Component} from 'react';
// import logo from './logo.svg';
import Greet from './components/Greet' ;
import './App.css';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render(){
    return(
      <div className= 'App'>
        <Counter/>
        {/* <Message/> */}
        {/* <Greet name='Bruce' heroName='Batman'>
          <p>This is a children props</p>
        </Greet>
        <Greet name='Clark' heroName='Superman'>
          <button>Action</button>  
        </Greet>
        <Greet name='Diana' heroName='Wonder Woman'/>
        <Welcome name='Bruce' heroName='Batman'/>
        <Welcome name='Clark' heroName='Superman'/>
        <Welcome name='Diana' heroName='Wonder Woman'/> */}

      </div>
    )
  }
}
export default App;
