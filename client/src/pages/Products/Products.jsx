import React from "react";
import './Products.scss';
import Filter from "../../components/Filter/Filter";
import List from "../../components/List/List";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import { useParams } from "react-router-dom";
const Products=()=>{
    var img="https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dw16e61723/JEWELRY_BANNERS_1920x800_VIEW-ALL-BRACELETS.jpg";
    var header="BRACELETS";
    const catid= parseInt(useParams().id);
    return (
        <div className="Products">
            <div className="left">
                <Filter></Filter>
            </div>
            <div className="right">
                <ProductHeader img={img} header={header}></ProductHeader>
                <List catid={catid}></List>
            </div>

        </div>
    )
}
export default Products;