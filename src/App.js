import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';
//https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} 	/>
      </header>
    </div>
  );
}

export default App;
