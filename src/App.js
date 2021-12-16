import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import CardForm from './components/CardForm';
import GreetingCard from './components/GreetingCard';
import Preview from './components/Preview';
import Footer from './components/Footer';

function App() {
  const query = new URLSearchParams(window.location.hash.split('?')[1]);
  const [importedGreeting, setImportedGreeting] = useState(query.get("greeting") || "Dear Harry,");
  const [importedBody, setImportedBody] = useState(query.get("body") || "I hope you are having a Happy Christmas!");
  const [importedClosing, setImportedClosing] = useState(query.get("closing") || "Cheers, Hagrid");
  const [email, setEmail] = useState('');

  console.log("Greeting:", query.get("greeting"));
  console.log(window.location.hash.split('?')[1]);
  return (
    <div className="app-wrapper">
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
      <Footer />
    </div>
  );
}

export default App;
