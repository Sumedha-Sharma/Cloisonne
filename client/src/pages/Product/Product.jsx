import React from "react";
import './Product.scss';
import { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


const data={
    productName:"Agrafe Sienna Bracelet",
    Price:"2700",
    images:[
        "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
        "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2a366e64/images/large/638022552437844160-2405192.png?sw=750&sh=750&sm=fit&sfrm=png",
        "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
        "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf3633d1b/images/large/637974153014444994-2386714.png?sw=750&sh=750&sm=fit&sfrm=png"],
    description:`Agrafe Sienna bracelet, 18K rose gold (750/1000), set with 77 brilliant-cut diamonds totaling 2.76 carats (for size 17).`
}

const Product=()=>{
    const [selectImage,setImage]=useState(0);
   
    const[quantity,setQuantiy]= useState(1);
    return (
        <div  className="Product">
            <div className="wrapper">
            <div className="image-con">
                
                <div className="image-select">
            <img src={data.images[0]} alt=""  onClick={e=>setImage(0)}/>
            <img src={data.images[1]} alt=""  onClick={e=>setImage(1)} />
            <img src={data.images[2]} alt=""  onClick={e=>setImage(2)}/>
            <img src={data.images[3]} alt=""  onClick={e=>setImage(3)}/>
                </div>
                <div className="main-image">
                <img src={data.images[selectImage]} alt="" />

                </div>
            </div>
            <div className="detail-con">
                <div className="title">
                    {
                        data.productName
                    }
                </div>
                <div className="description">
                    <p> {
                        data.description
                    }<br/><br/>  Please note that the carat weight, number of stones and produc
                     dimensions will vary based on the size of the creation you order. For detailed information please contact us.
                    </p>
               
                </div>
                <div className="price">
                  INR  {data.Price}
                </div>
                <div className="quantity">
                    <button onClick={()=>setQuantiy(prev=>prev===1?1:prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantiy(prev=>prev+1)}>+</button>
                </div>
                <div className="actions">
                    <button className="cart">
                        ADD TO CART 
                        <ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon>
                    </button>
                    <button className="wishlist">
                            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </button>
                </div>

                <div className="contact">
                    
                <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                <p>
                Still Have Doubts?
                Contact At - xxxxxxxxxx
                </p>
                
                </div>



            </div>
            </div>
           
        </div>
    )
}
export default Product;