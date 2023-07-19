import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cart from "../Cart/Cart";
import './Navbar.scss'
const Navbar=()=>{

    const [open,setOpen]=useState(false);
    return (
        <div className="navbar">
            <div className="nav-up">
                <div className="up-left">
                   
                <div className="item">
                      
<SearchOutlinedIcon />
                 </div> 
                 <div className="item">
                      
<ContactSupportOutlinedIcon/>
                 </div> 
                

                </div>
                <div className="up-center">
                    
                <div className="item" >
                <Link to="/">  Cloisonnè</Link>
                      

                    </div>
                

                </div>
                <div className="up-right">
                    <div className="item icon" >
                        <PersonOutlineOutlinedIcon/>

                    </div>
                    <div className="item">
                        <FavoriteBorderOutlinedIcon/>


                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>

                    </div>
                    
                

                </div>
            

            
            
            </div>
            <div className="nav-down">
            <div className="wrapper">
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

            </div>
            {open && <Cart/>}
        </div>
    )
}
export default Navbar;