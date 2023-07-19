import React from "react";
import './ProductHeader.scss';
const ProductHeader=(props)=>{
    return (
        <div  className="ProductHeader">
            <div className="image-con">
            <img src={props.img} alt="banner header" />
            </div>
            <div className="header">
            {props.header}
            </div>
        </div>
    )
}
export default ProductHeader;