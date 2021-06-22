
import React, { useState } from "react";
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';
//https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/

function App() {
  const [showBot, toggleBot] = useState(false);
  
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div className="App">
      <header className="App-header">
      {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        )}
        <button className="botbutton" onClick={() => toggleBot((prev) => !prev)}>Wanda</button>
      </header>
    </div>
  );
}

export default App;
