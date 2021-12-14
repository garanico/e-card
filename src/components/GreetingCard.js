import React from 'react'
import reindeerdog from '../img/reindeerdog.jpg';
import '../App.css';

function GreetingCard({ greeting, body, closing }) {
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
                <button>Customize Your Card</button> 
                </div>
            </div>
            
        </div>
    )
}

export default GreetingCard
