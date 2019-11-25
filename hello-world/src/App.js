import React, {Component} from 'react';
// import logo from './logo.svg';
// import Greet from './components/Greet' ;
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InLine from './components/InLine';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import './appStyles.css';
import styles from './appStyles.module.css'
import './App.css';

class App extends Component {
  render(){
    return(
      <div className= 'App'>
        <h1 className = 'error'>Error</h1>
        <h1 className ={styles.success}>Success</h1>
        <InLine/>
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/>
        <FunctionClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name='Bruce' heroName='Batman'>
          <p>This is a children props</p>
        </Greet>
        <Greet name='Clark' heroName='Superman'>
          <button>Action</button>  
        </Greet>
        <Greet name='Diana' heroName='Wonder Woman'/> */}
        {/* <Welcome name='Bruce' heroName='Batman'/>
        <Welcome name='Clark' heroName='Superman'/>
        <Welcome name='Diana' heroName='Wonder Woman'/>  */}
      

      </div>
    )
  }
}
export default App;
