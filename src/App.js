import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message.js';
import NamePicker from './NamePicker';

function App() {
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState(
    localStorage.getItem('username') || ''
  )
  console.log(messages)
  
  return <div className="App">
    <header className="header">
      <div className="logo"/>
      GB CHAT
   
      <NamePicker saveName={setUsername}/>
      
    </header>
    
   

  <div className="messages">
  {messages.map((msg,i)=> {
   return <Message key={i} {...msg} />
   })}
  </div>
    
  <TextInput 
        send={(t)=> setMessages([{text:t,name:username, ts:new Date()}, ...messages])}
  />

  </div>
 
}
export default App;