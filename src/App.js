import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message.js';
import NamePicker from './NamePicker';

function App() {
  const [messages,setMessages] = useState([])
  return <div className="App">
    <header className="header">
      <div className="logo"/>
      GB CHAT
   
        <NamePicker/>
      
    </header>
    
   

  <div className="messages">
  {messages.map((m,i)=> {
   return <Message key={i} {...m} />
   })}
    </div>
    
    <TextInput 
        send={(t)=> setMessages([{text:t},...messages])}
    />

  </div>
 
}
export default App;