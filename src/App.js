import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import CardForm from './components/CardForm';
import GreetingCard from './components/GreetingCard';
import Preview from './components/Preview';

function App() {
  const [greeting, setGreeting] = useState('');
  const [body, setBody] = useState('');
  const [closing, setClosing] = useState('');
  const [email, setEmail] = useState('');


  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={
          <CardForm
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          setBody={setBody}
          closing={closing}
          setClosing={setClosing}
          email={email}
          setEmail={setEmail} />
        }/>
        <Route exact path="/preview" element={
          <Preview 
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          setBody={setBody}
          closing={closing}
          setClosing={setClosing}
          email={email}
          />
        }/>
        <Route exact path="/card" element={
          <GreetingCard
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          setBody={setBody}
          closing={closing}
          setClosing={setClosing}
          email={email}
        />
        }/>
    </Routes>
    </HashRouter>
  );
}

export default App;
