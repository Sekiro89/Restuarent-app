import React from 'react';
import logo from "../images/Logo.svg";

const Footer=()=>{
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are an authentic indian restuarent, focused on traditional recipies served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address:<br/>212 mangalore, karnataka</li>
                        <li>Phone:<br/>+90 901932041</li>
                        <li>Email:<br/>Example@gmail.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;