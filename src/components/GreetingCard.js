import React from 'react'
import { Link } from "react-router-dom";
import reindeerdog from '../img/reindeerdog.jpg';
import '../App.css';

function GreetingCard({ greeting, setGreeting, body, setBody, closing, setClosing, email, setEmail }) {
    const clearForm = () =>{
        setGreeting("");
        setBody("");
        setClosing("");
        setEmail('');

    }

    return (
        <div className="gc-component-container">
            <div className="greeting-card-container">
                <div className="card-image">
                    <img src={reindeerdog} alt="dog with reindeer antlers" />
                </div>

                <div className="card-message">
                    <p>{greeting}</p>
                    <p>{body}</p>
                    <p>{closing}</p>
                </div>
            </div>
            <div className="reshare-message-wrapper">
                <div className="reshare-message">
                <p>Share Your Own Card!</p>
                <Link to={{pathname:"/"}}><button onClick={clearForm}>Customize Card</button></Link>
                </div>
            </div>
        </div>
    )
}

export default GreetingCard
