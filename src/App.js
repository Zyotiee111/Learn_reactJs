import React from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionalComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/hello';
import Greet from './components/greet';
import Message from './components/message';
import Counter from './components/setstate';
import FunClick from './components/functionclick';
import ClassClick from './components/classclick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import ChildComp from './components/ChildComp';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Avator from './components/Avator';
function App() {
  return (
    <div className= 'App'>
      {/* <NameList/> */}
      {/* <StyleSheet/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
     {/* <ClassComp name= 'Prabhat' heroname="hero"/>  */}
    {/* <FunctionComp name = "Jyoti"/> 
     <Hello/>  */}
    {/* <Greet name = "Jyoti" heroname = "batman">
      <p> This is childrem props </p>
    </Greet>
    <Greet name = "Kiran" heroname = "supermman">
      <button className= "btn btn-primary"> Action </button>
      </Greet>
    <Greet name = "Prabhat" heroname = "greatman"/>
    */}
     {/* <Greet name = "Prabhat" heroname = "greatman"/> */}
     {/* <FunClick/>
     <ClassClick/> */}
     {/* <EventBind/> */}
     {/* <ParentComp/> */}
     {/* <UserGreeting/> */}
     <Avator/>
    
     </div> 
    

  );
}

export default App;
