import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reindeerdog from '../img/reindeerdog.jpg';
import '../App.css';

function CardForm({ }) {
    return (
        <div className="App">
            <div className="card-image">
                <img src={reindeerdog} alt="dog with reindeer antlers" />
            </div>

            <form>
                <label>Recipient's Email:</label>
                <input type="email" email="email" placeholder="harry@hogwarts.com" />

                <label>Greeting:</label>
                <input type="text" greeting="greeting" placeholder="Dear Harry," />

                <label>Body:</label>
                <input type="textarea" body="body" placeholder="Happy Christmas! I'll see you after the holiday break!"/>

                <label>Closing:</label>
                <input type="text" closing="closing" placeholder="Cheers, Hagrid"/>  

                <Link to={{pathname:"/preview"}}><button>Create Card</button></Link>              
            </form>
            
        </div>
    )
}

export default CardForm
