import React from 'react';
import '../App.css';

function Footer() {
    return (

        <footer>
            <div className="copyright-container">
                <p>&copy;2021 Grace Aranico</p>
            </div>
            <div className="icon-container">
                <a href="https://instagram.com/gracieissoamzin"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/gracearanico/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/garanico"><i className="fab fa-github-square"></i></a>
            </div> 
        </footer>
    )
}

export default Footer;
