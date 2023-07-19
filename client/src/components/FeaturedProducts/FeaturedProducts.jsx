import React, { useEffect } from "react";
import './FeaturedProducts.scss';
import ProductCard from "../ProductCard/ProductCard";
import { useState} from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
const products=[
    
    {   id:1,
        ProductName:"Orchid Maneuver Necklace",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0d69674e/images/large/637708815108221989-2116939.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw21eab467/images/large/637708815108221989-2117192.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3000,
        final:2100,
    },
    {   
        id:2,
        ProductName:"Animal Grudge Bracelet",
    img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1fc2cf71/images/large/638022548037617702-2405053.png?sw=750&sh=750&sm=fit&sfrm=png",
    img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbb14f3ad/images/large/638022548037617702-2405188.png?sw=750&sh=750&sm=fit&sfrm=png",
    initial:3500,
    final:2700,
    },
    {   id:3,
        ProductName:"Trinity Earrings",
    img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1b142280/images/large/637708829394890998-2088274.png?sw=750&sh=750&sm=fit&sfrm=png",
    img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwff052a88/images/large/637708829394890998-2088311.png?sw=750&sh=750&sm=fit&sfrm=png",
    initial:2000,
    final:1500,
    },
    {   id:4,
        ProductName:"Fontaine Ring",
    img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7f759cb4/images/large/637708783464273633-2223226.png?sw=750&sh=750&sm=fit&sfrm=png",
    img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc4c6f5c9/images/large/637708783464273633-2223485.png?sw=750&sh=750&sm=fit&sfrm=png",
    initial:3000,
    final:1900,
    }
]
const FeaturedProducts=()=>{
    const {data,loading,error}=useFetch('/products?populate=*');
    return (
        <div  className="FeaturedProducts">
            <div className="title">
                <div className="header">
        Featured Products

                </div>
                <div className="desc">
                    <p>
                    Our featured jewelry products showcase exquisite craftsmanship and stunning designs. 
                From delicate diamond necklaces to bold statement rings, each piece is meticulously crafted with 
                the finest materials to ensure unparalleled quality and beauty. 
                Elevate any outfit with our selection of must-have jewelry pieces.
                    </p>
        

                </div>
            </div>
            <div className="pro-con">
                
                <ProductCard id={data[0]?.id} img1={process.env.REACT_APP_UPLOAD_URL+data[0]?.attributes?.img1?.data?.attributes?.url} img2={process.env.REACT_APP_UPLOAD_URL+data[0]?.attributes?.img2?.data?.attributes?.url} ProductName={data[0]?.attributes.title}initial={data[0]?.attributes.ini_price} final={data[0]?.attributes.fin_price} />
                <ProductCard id={data[11]?.id} img1={process.env.REACT_APP_UPLOAD_URL+data[11]?.attributes?.img1?.data?.attributes?.url} img2={process.env.REACT_APP_UPLOAD_URL+data[11]?.attributes?.img2?.data?.attributes?.url} ProductName={data[11]?.attributes.title}initial={data[11]?.attributes.ini_price} final={data[11]?.attributes.fin_price}/>
                <ProductCard id={data[13]?.id} img1={process.env.REACT_APP_UPLOAD_URL+data[13]?.attributes?.img1?.data?.attributes?.url} img2={process.env.REACT_APP_UPLOAD_URL+data[13]?.attributes?.img2?.data?.attributes?.url} ProductName={data[13]?.attributes.title}initial={data[13]?.attributes.ini_price} final={data[13]?.attributes.fin_price}/>
                <ProductCard id={data[16]?.id} img1={process.env.REACT_APP_UPLOAD_URL+data[16]?.attributes?.img1?.data?.attributes?.url} img2={process.env.REACT_APP_UPLOAD_URL+data[16]?.attributes?.img3?.data?.attributes?.url} ProductName={data[16]?.attributes.title}initial={data[16]?.attributes.ini_price} final={data[16]?.attributes.fin_price}/>
            </div>
        </div>
    )
}
export default FeaturedProducts;