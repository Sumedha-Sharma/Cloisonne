import React from "react";
import './Home.scss'
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
const Home=()=>{
    return (
        <div className="Home">
            <Slider/>
            <FeaturedProducts/>
            <CategoryGrid/>
        </div>
    )
}
export default Home;