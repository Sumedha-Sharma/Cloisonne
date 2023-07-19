import React from "react";
import './List.scss';
import Card from "../Card/Card";
const List=()=>{
    const ProdList=[
        {   
            id:1,
            ProductName:"Animal Grudge Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1fc2cf71/images/large/638022548037617702-2405053.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbb14f3ad/images/large/638022548037617702-2405188.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,
        },
        {
        id:2,
        ProductName:"Agrafe Sienna Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,
        },
        {id:3,
        ProductName:"Diamante Chimera Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2fd3ea14/images/large/637777783362102795-2294713.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcc48fddb/images/large/637777783362102795-2294753.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},

        {id:4,
            ProductName:" Clavus Statuo Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf8180e3a/images/large/637795331200574085-2295921.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe76be396/images/large/637744432580183240-2267424.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},

        {id:5,
            ProductName:"Exodus Regalia Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb6e72898/images/large/637709065129702982-2196238.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe4228bd5/images/large/637709065129702982-2196410.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},
        {id:6,
            ProductName:" Vi Trinity Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa3135aad/images/large/637708788417381342-2059289.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4b958a4e/images/large/637708788417381342-2059481.png?sw=2000&sh=2000&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},

        {id:7,
            ProductName:"Fontaine Justice Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6b9f4ad9/images/large/638022550528192950-2405023.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0bbbd44b/images/large/638022550528192950-2405211.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},
        
        {id:8,
            ProductName:"L'Amour Aeternus Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw62bf7db6/images/large/637708806859654513-2116929.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2ea97c5a/images/large/637708806859654513-2117597.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},
        {   
            id:9,
            ProductName:"Animal Grudge Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1fc2cf71/images/large/638022548037617702-2405053.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbb14f3ad/images/large/638022548037617702-2405188.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,
        },
        {
        id:10,
        ProductName:"Agrafe Sienna Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc49f772b/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf9a2831/images/large/638022552437844160-2405123.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,
        },
        {id:11,
        ProductName:"Diamante Chimera Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2fd3ea14/images/large/637777783362102795-2294713.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcc48fddb/images/large/637777783362102795-2294753.png?sw=750&sh=750&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},
        {id:12,
            ProductName:" Vi Trinity Bracelet",
        img1:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa3135aad/images/large/637708788417381342-2059289.png?sw=750&sh=750&sm=fit&sfrm=png",
        img2:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4b958a4e/images/large/637708788417381342-2059481.png?sw=2000&sh=2000&sm=fit&sfrm=png",
        initial:3500,
        final:2700,},

        
    ];
    var returnCOllection=(ProdList)=> { return ProdList.map(products=>
        
            <Card id={products.id} img1={products.img1} img2={products.img2} ProductName={products.ProductName} initial={products.initial} final={products.final}/>
        
       
        
        
        
        )};
    return (
        <div  className="List">
           
           {returnCOllection(ProdList)}
        </div>
    )
}
export default List;