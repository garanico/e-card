import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reindeerdog from '../img/reindeerdog.jpg';
import '../App.css';

function CardForm({ greeting, setGreeting, body, setBody, closing, setClosing, email, setEmail }) {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(email, greeting, body, closing)

    }


    return (
        <div className="App">
            <div className="card-form-container">
                <div className="card-image">
                    <img src={reindeerdog} alt="dog with reindeer antlers" />
                </div>

                <form>
                    <label htmlFor="email">Recipient's Email:</label>
                    <input 
                        name="email"
                        type="email" 
                        placeholder="harry@hogwarts.com" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                    />

                    <label htmlFor="greeting">Greeting:</label>
                    <input 
                        name="greeting"
                        type="text" 
                        placeholder="Dear Harry,"
                        value={greeting}
                        onChange={event => setGreeting(event.target.value)}  
                    />

                    <label htmlFor="body">Body:</label>
                    <textarea 
                        name="body"
                        type="text" 
                        placeholder="Happy Christmas! I'll see you after the holiday break!" 
                        rows="10"
                        value={body}  
                        onChange={event => setBody(event.target.value)}>
                    </textarea>

                    <label htmlFor="closing">Closing:</label>
                    <input 
                        name="closing" 
                        type="text" 
                        placeholder="Cheers, Hagrid"
                        value={closing} 
                        onChange={event => setClosing(event.target.value)}
                    />  

                    <Link to={{pathname:"/preview"}}><button type="submit">Preview Card</button></Link>              
                </form>
            </div>
        </div>
    )
}


export default CardForm
