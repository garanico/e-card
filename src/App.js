import { useState } from 'react';
import './App.css';

//components
import GreetingCard from './components/GreetingCard';

function App() {
  const [greeting, setGreeting] = useState('Dear Harry, ');
  const [body, setBody] = useState('Happy Christmas');
  const [closing, setClosing] = useState('Cheers, Hagrid');

  return (
    <div className="App">
       <GreetingCard
          greeting={greeting}
          body={body}
          closing={closing}/>
    </div>
  );
}

export default App;
