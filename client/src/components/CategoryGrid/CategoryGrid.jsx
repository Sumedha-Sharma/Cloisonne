import React from "react";
import './CategoryGrid.scss';
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const categoryImg=[
    {
        categoryName:"Bracelets",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1763bb2e/images/large/638022552437844160-2405087.png?sw=750&sh=750&sm=fit&sfrm=png",
    },
    {
        categoryName:"Earrings",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw769533ca/images/large/637709111141726060-2196399.png?sw=750&sh=750&sm=fit&sfrm=png",
    },
    {
        categoryName:"Rings",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc03b888a/images/large/637709038392763537-2196400.png?sw=750&sh=750&sm=fit&sfrm=png"
    },
    {
        categoryName:"NeckLaces",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa6fad1ea/images/large/637871346263524174-2274539.png?sw=750&sh=750&sm=fit&sfrm=png"
    },
    {
        categoryName:"Love And Engagement",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwae8d4872/images/large/638007028876922334-2400511.png?sw=750&sh=750&sm=fit&sfrm=png"
    },
    {
        categoryName:"Watches",
        url:"https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe8d7d501/images/large/637709249519425681-2196094.png?sw=350&sh=350&sm=fit&sfrm=png"
    }


    
    
    


]
const CategoryGrid=()=>{
    const {data,loading,error}=useFetch('/categories?populate=*');
    return (
        <div className="CategoryGrid">
            {

            }
            {/* console.log(data[0])
            
            {console.log(data[0].attributes.title)} */}
            {console.log(process.env.REACT_APP_UPLOAD_URL+data[0]?.attributes?.cover_img?.data?.attributes?.url)}
            
            <div className="wrapper">
            <div className="v-div1">
                <div className="v1-sub1 marker">
                <img src={process.env.REACT_APP_UPLOAD_URL+data[0]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
                <div className="overlay">
               < Link to={`/products/`+data[0]?.id}>   {data[0]?.attributes?.title}</Link>  
                </div>
                </div>
                <div className="v1-sub2 marker">
                <img src={process.env.REACT_APP_UPLOAD_URL+data[2]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
                <div className="overlay">
                <Link to={`/products/`+data[2]?.id}>   {data[2]?.attributes?.title}</Link>  
                </div>
                </div>

            </div>
            <div className="v-div2 marker">
            <img src={process.env.REACT_APP_UPLOAD_URL+data[4]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
            
            <div className="overlay">
            <Link to={`/products/`+data[4]?.id}>   {data[4]?.attributes?.title}</Link>  
            </div>
            </div>
            <div className="v-div3">

                <div className="v3-sub1">
                        <div className="v3-s1-d1 marker">
                        <img src={process.env.REACT_APP_UPLOAD_URL+data[3]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
                        <div className="overlay">
                       <Link to={`/products/`+data[3]?.id}>   {data[3]?.attributes?.title}</Link>  
                         </div>

                        </div>
                        <div className="v3-s1-d2 marker">
                        <img src={process.env.REACT_APP_UPLOAD_URL+data[5]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
                        <div className="overlay">
                      <  Link to={`/products/`+data[5]?.id}>   {data[5]?.attributes?.title}</Link>  
                         </div>
                        </div>
                </div>
                <div className="v3-sub2 marker">
                <img src={process.env.REACT_APP_UPLOAD_URL+data[1]?.attributes?.cover_img?.data?.attributes?.url} alt="" />
                <div className="overlay">
                <Link to={`/products/`+data[1]?.id}>   {data[1]?.attributes?.title}</Link>  
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default CategoryGrid;