import React from "react";
import { Link } from 'react-router-dom';
import './Footer.scss'
import payLogo from '../../img/payLogo.png'
const date= new Date();
const currYear= date.getFullYear();
const Footer=()=>{
    return (
        <div className="Footer">
            <div className="top">
                <div className="category">
                    <div className="header">Categories</div>
                    <div className="item">
                        <Link to="/products/1">Jewelery</Link>
                    </div>
                    <div className="item">
                        <Link to="/products/2">Gifts</Link>
                    </div>
                    <div className="item">
                        <Link to="/products/3">Love & Engagement</Link>
                    </div>
                    <div className="item">
                        <Link to="/products/4">Watches</Link>
                    </div>
                </div>
                <div className="links">
                    <div className="header"> Links</div>
                    <div className="item">
                        FAQ
                    </div>
                    <div className="item">
                        Pages
                    </div>
                    <div className="item">
                        Stores
                    </div>
                    <div className="item">
                        Compare
                    </div>
                    <div className="item">
                        Cookies
                    </div>
                </div>
                <div className="about">
                    <div className="header">About</div>
                    <div className="item">
                    Cloisonne is an online jewelry store offering a wide range of unique and elegant designs. 
                    Our commitment to quality and customer satisfaction is reflected in every piece we create.
                     Shop with us and experience the beauty of fine craftsmanship.
                    </div>
                </div>
                <div className="contact">
                <div className="header">Contact</div>
                <div className="item">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\
                 Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="wrapper1">
                    <div className="logo">Cloisonnè</div>
                    <div className="copyr">
                    © Copyright {currYear}, All rights Reserved
                    </div>
                </div>
                <div className="wrapper2">
                    <div className="paylogo">
                        <img src={payLogo} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;