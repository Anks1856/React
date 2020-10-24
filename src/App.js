import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Greet} from './components/Greet'
import Wellcome from './components/Wellcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Event from './components/Event'
import Parent from './components/Parent'
import Condition from './components/Condition'
import NameList from './components/NameList';
import Person from './components/Person'
import CSS from './components/CSS'
import Form from './components/Form'


function App() {
  return (
    <div className="App">
     <Form />
     {/* <CSS /> */}
      {/* <Person /> */}
      {/* <NameList /> */}
    {/* <Condition /> */}
      {/* <Parent /> */}
    {/* <Event /> */}
    {/* <Message /> */}
    {/* <Counter /> */}
    </div>
    // <div className="App">
    //   <Greet name="Anks" />
    //   <Wellcome name="Namste!"/>
    //   <Greet name="Ankur"/>
    //   <Wellcome name="kem cho ?"/>
    //   <Greet name="Don"/>
    //   <Wellcome name="Su chale ?"/>
    // </div>
  );
}

export default App;
