import React from "react";
import {Link} from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg';

const Header=()=>{
    return(
        <header className="header">
            <section>
                <div>
                    <h2>
                        Littlelemon
                    </h2>
                    <h3>
                        Bengaluru
                    </h3>
                    <p>
                        We are a family south indian kitchen focused on traditional recepies
                        servedwith a modern twist
                    </p>
                   <Link to="/Booking"><button aria-label="on-click">Reserve table</button></Link> 
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt=''/>                    
                </div>
            </section>
        </header>
    );
};

export default Header;