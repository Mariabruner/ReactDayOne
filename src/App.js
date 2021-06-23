
import { useState } from 'react';

import Navbar from './components/Navbar'
import Post from './components/Post'
import Status from './components/Status'
import StatusEditor from './components/StatusEditor'

import './App.css';

function App() {
  const [currentStatus, setCurrentStatus] = useState("Feeling like it's time to Code yayayay!")

  return (
    <div className="App">
      <Navbar />
      <Status status={currentStatus}/>
      <StatusEditor setCurrentStatus={setCurrentStatus}/>

      <header className="App-header">
        <Post 
          date="5/12"
          title="Hello World"
          content="This is the content"
        />
        <Post
          date="5/14"
          title="Intro to react!"
          content="Today I started learning react"
        />
      </header>
    </div>
  );
}

export default App;