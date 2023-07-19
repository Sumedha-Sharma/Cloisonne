import React from "react";
import './Cart.scss';
import CartItem from "../CartItem/CartItem";

const Cart=()=>{
    const data=[{
        id:1,
        productName:"Agrafe Sienna Bracelet",
        Price:"2700",
        images:[
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2a366e64/images/large/638022552437844160-2405192.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf3633d1b/images/large/637974153014444994-2386714.png?sw=750&sh=750&sm=fit&sfrm=png"],
        description:`Agrafe Sienna bracelet, 18K rose gold (750/1000), set with 77 brilliant-cut diamonds totaling 2.76 carats (for size 17).`
    },{
        id:2,
        productName:"Agrafe Sienna Bracelet",
        Price:"2700",
        images:[
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2a366e64/images/large/638022552437844160-2405192.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
            "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf3633d1b/images/large/637974153014444994-2386714.png?sw=750&sh=750&sm=fit&sfrm=png"],
        description:`Agrafe Sienna bracelet, 18K rose gold (750/1000), set with 77 brilliant-cut diamonds totaling 2.76 carats (for size 17).`
    }]

    var returnCartItem=(data)=> { return data.map(cartItem=>
        
        <CartItem id={cartItem.id} img={cartItem.images[0]} ProductName={cartItem.productName} price={cartItem.Price} desc={cartItem.description}/>
    
   
    
    
    
    )};
    return (
        <div className="Cart">
            <div className="header">
                Products In Your Cart
            </div>
            <div className="item-area">
               
               {returnCartItem(data)}
            

            </div>
            <div className="subtotal">
                <div>
                    SUBTOTAL
                </div>
                <div>
                ₹10800
                </div>
            </div>
            <div className="cart-action">
                <div className="proceedCheck">
                    <button>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="resetCheck">
                    <button>
                        Reset Cart
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default Cart;