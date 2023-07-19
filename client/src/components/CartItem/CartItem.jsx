import React from "react";
import './CartItem.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem=(props)=>{
    // const data={
    //     productName:"Agrafe Sienna Bracelet",
    //     Price:"2700",
    //     images:[
    //         "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
    //         "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2a366e64/images/large/638022552437844160-2405192.png?sw=750&sh=750&sm=fit&sfrm=png",
    //         "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
    //         "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf3633d1b/images/large/637974153014444994-2386714.png?sw=750&sh=750&sm=fit&sfrm=png"],
    //     description:`Agrafe Sienna bracelet, 18K rose gold (750/1000), set with 77 brilliant-cut diamonds totaling 2.76 carats (for size 17).`
    // }
    return (
        <div className="CartItem">
           
                
                    <div className="img-con">

                    <img src={props.img} alt="" />
                    </div>
                    <div className="deets">
                        <div className="title">
                            {props.ProductName}
                        </div>
                        <div className="desc">
                            {props.desc}
                        </div>
                        <div className="totalPrice">
                            <div className="quantity">
                                2 
                            </div>
                            <div>x</div>
                            <div className="price">
                            ₹ {props.price}
                            </div>
                        </div>
                    </div>
                    <div className="item-action">
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </div>
                
                </div>
            

           
    )
}
export default CartItem;