import React from 'react'
import '../App.css';
import reindeerdog from '../img/reindeerdog.jpg';


function Preview({ greeting, body, closing }) {
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
            <div className="button-controls">
                <button>Edit</button>
                <button>Send Card</button>
            </div>
            
        </div>
    )
}

export default Preview
