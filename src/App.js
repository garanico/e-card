import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import GreetingCard from './components/GreetingCard';
import Preview from './components/Preview';

function App() {
  const [greeting, setGreeting] = useState('Dear Harry, ');
  const [body, setBody] = useState('Happy Christmas');
  const [closing, setClosing] = useState('Cheers, Hagrid');

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={
          <CardForm />
        }/>
        <Route exact path="/preview" element={
          <Preview 
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          closing={closing}
      />
        <Route exact path="/card" element={
          <GreetingCard
      greeting={greeting}
      setGreeting={setGreeting}
      body={body}
      setBody={setBody}
      closing={closing}
      setClosing={setClosing}
      />
    </Routes>
    </HashRouter>
  );
}

export default App;
