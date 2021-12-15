import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import CardForm from './components/CardForm';
import GreetingCard from './components/GreetingCard';
import Preview from './components/Preview';

function App() {
  const query = new URLSearchParams(window.location.search);
  const [importedGreeting, setImportedGreeting] = useState(query.get("greeting") || "Dear Harry,");
  const [importedBody, setImportedBody] = useState(query.get("body") || "I hope you are having a Happy Christmas!");
  const [importedClosing, setImportedClosing] = useState(query.get("closing") || "Cheers, Hagrid");
  const [email, setEmail] = useState('');

  console.log( query.get("greeting") );

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={
          <CardForm
          greeting={importedGreeting}
          setGreeting={setImportedGreeting}
          body={importedBody}
          setBody={setImportedBody}
          closing={importedClosing}
          setClosing={setImportedClosing}
          email={email} 
          setEmail={setEmail}
          />
        }/>
        <Route exact path="/preview" element={
          <Preview 
          greeting={importedGreeting}
          setGreeting={setImportedGreeting}
          body={importedBody}
          setBody={setImportedBody}
          closing={importedClosing}
          setClosing={setImportedClosing}
          email={email}
          />
        }/>
        <Route exact path="/card" element={
          <GreetingCard
          greeting={importedGreeting}
          setGreeting={setImportedGreeting}
          body={importedBody}
          setBody={setImportedBody}
          closing={importedClosing}
          setClosing={setImportedClosing}
          email={email}
        />
        }/>
    </Routes>
    </HashRouter>
  );
}

export default App;
