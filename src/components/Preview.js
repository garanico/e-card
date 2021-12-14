import React from 'react'
import { Link } from 'react-router-dom';
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
                <Link to={{pathname:"/"}}><button>Edit</button></Link>
                <Link to={{pathname:"/card"}}><button>Send Card</button></Link>
            </div>
            
        </div>
    )
}

export default Preview
