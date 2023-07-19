import React from "react";




import './SliderDiv.scss';
const SliderDiv=(props)=>{
    return (
        <div  className="SliderDiv">
            <div className="imgcon1">
            <img src={props.img1} alt=""  />
            </div>
            <div className="title">
                <div className="part1">
                    {props.part1}
                </div>
                <div className="part2">
                    Collection
                </div>
                <div className="wrapper">
                <div className="breaker">
                    <hr />
                </div>
                </div>
              
                <div className="desc">
                    {props.desc}
                </div>
            </div>
            <div className="imgcon2">
                 <img src={props.img2} alt=""  />
            
            </div>
            
            
        </div>
    )
}
export default SliderDiv;