import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";
const Card=(props)=>{
    
    return (
        
        <div  className="Card" >
            

            <div className="img-holder">
                <div className="img1">
                <img src={props.img1} alt="" />
                </div>
                <div className="img2">
                <img src={props.img2} alt="" />
                </div>
            
            </div>
            <Link className="details" to={`/product/${props.id}`}>
            <div >
                <div className="name">
                    {props.ProductName}
                </div>
                <div className="price">
                    <div className="initial">
                    ₹{props.initial}
                    </div>
                    <div className="final">
                    ₹{props.final}

                    </div>
                </div>
            </div>
            </Link>
            
        
        </div>
    )
}
export default Card;