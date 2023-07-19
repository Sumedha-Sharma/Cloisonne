import React from "react";
import { useState } from "react";
import './Filter.scss';

const Filter=()=>{
const collections=["Fontaine",
"Orchid Maneuver",
"Animal Grudge",
"Trinity",
"Exodus Regalia",
"Spring Reverie",
"L'amour",
"Agrafe",
"Diamante",
"Clavus",
"La Cresta"
];
const minPrice=0;
const[maxPrice,setMaxPrice]=useState(10000000);

var returnCOllection=(collections)=> { return collections.map(item=>
    
<div className="input-con"><input type="checkbox" id={item} name={item} value={item}/>
<label for={item}> {item}</label></div>



)};

    return (
      
        <div  className="Filter">
            <div className="sortBy">
                <div className="con">
                    <p>Sort By</p>
                    <div className="input-con">
                        <input type="radio" id="low" name="price" value="low"/>
                        <label for="low">Price low to high</label>
                    </div>
                    
                    <div className="input-con">
                        <input type="radio" id="high" name="price" value="high"/>
                        <label for="high">Price high to low</label>
                    </div>
                   
                </div>
           
            </div>
            <div className="gender">
            <div className="con">
                 <p>Gender</p>
                 <div className="input-con">
                    <input type="checkbox" id="man" name="man" value="man"/>
                    <label for="man"> Men</label>
                 </div>
                <div className="input-con">
                <input type="checkbox" id="woman" name="woman" value="woman"/>
                <label for="woman"> Women</label>
                </div>
               
            </div>
                

            </div>
            <div className="collections">
                <div className="con">
                <p>Collections</p>
                {returnCOllection(collections)}
                </div>
            
            </div>
            <div className="paving">
            <div className="con">
                 <p>Paving</p>
                 <div className="input-con">
                 <input type="checkbox" id="paved" name="paved" value="paved"/>
                <label for="man"> Paved</label>
                 </div>
                <div className="input-con">
                <input type="checkbox" id="non-paved" name="non-paved" value="non-paved"/>
                <label for="man"> Non-Paved</label>
                </div>
               <div className="input-con">
               <input type="checkbox" id="semi-paved" name="semi-paved" value="semi-paved"/>
                <label for="woman"> Semi-Paved</label>
               </div>
               
            </div>
                
            </div>
            <div className="price">
                <div className="con">
                <p>Choose a Price Range</p>
               
                    <div className="input-con">
                    <span>{minPrice}</span>
                     <input type="range" name="priceSlider" id="priceSlider" min={minPrice} max={1000000}  onChange={(e)=>setMaxPrice(e.target.value)} />
                    <span>{maxPrice}</span>
                    </div>
                
             
                </div>
                
               

            </div>
        </div>
    )
}
export default Filter;