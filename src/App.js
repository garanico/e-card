import { useState } from 'react';
import './App.css';

//components
import GreetingCard from './components/GreetingCard';
import Preview from './components/Preview';

function App() {
  const [greeting, setGreeting] = useState('Dear Harry, ');
  const [body, setBody] = useState('Happy Christmas');
  const [closing, setClosing] = useState('Cheers, Hagrid');

  return (
    <div className="App">
       <GreetingCard
          greeting={greeting}
          body={body}
          closing={closing}
      />

      <Preview 
      greeting={greeting}
      setGreeting={setGreeting}
      body={body}
      setBody={setBody}
      closing={closing}
      setClosing={setClosing}
      />

    </div>
  );
}

export default App;
