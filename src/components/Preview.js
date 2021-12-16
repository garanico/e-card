import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import reindeerdog from '../img/reindeerdog.jpg';


function Preview({ greeting, body, closing, email }) {

    const sendCard =() => {
        let mailto = `mailto:${email}`;
        mailto += '?subject=You have happy mail!';
        mailto += '&body=You have received an e-greeting card.';
        mailto += '%0D%0A%0D%0A';
        mailto += 'Go To Greeting Card:';
        mailto += '%0D%0A'; //'% + number + letter' creates a invisible character, 2 characters creates single line return
    
        let url = 'https://garanico.github.io/e-card/#/card';
        url += `?greeting=${encodeURIComponent(greeting)}`;
        url += `&body=${encodeURIComponent(body)}`;
        url += `&closing=${encodeURIComponent(closing)}`;
    
        mailto += encodeURIComponent(url);
    
        console.log(mailto);
    
        window.open(mailto);
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
            <div className="button-controls">
                <Link to={{pathname:"/"}}><button>Edit</button></Link>
                <Link to={{pathname:"/card"}}><button onClick={sendCard}>Send</button></Link>
            </div>
        </div>
    )
}

export default Preview;
