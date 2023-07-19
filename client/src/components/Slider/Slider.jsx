import React from "react";
import './Slider.scss';
import { useState } from "react";
import SliderDiv from "../SliderDiv/SliderDiv";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import springReverie1 from '../../img/springReverie.jpg'
import springReverie2 from '../../img/springReverie2.jpg'
import lamour1 from '../../img/lamour1.jpg'
import lamour2 from '../../img/lamour2.jpg'
import regaliaExodus1 from '../../img/regaliaExodus.jpeg'
import regaliaExodus2 from '../../img/regaliaExodus2.webp'

const data=[
    {
        part1:"Exodus Regalia",
        desc:"FOR THE BOLD AND CAREFREE",
        img1:regaliaExodus1,
        img2:regaliaExodus2,

    },
    {
        part1:"Spring Reverie",
        desc:"GET LOST IN THE DAYDREAM",
        img1:springReverie1,
        img2:springReverie2,

    },
    {
        part1:"L'amour",
        desc:"FOR PERFECT BEGINNINGS",
        img1:lamour1,
        img2:lamour2,

    }
]
const Slider=()=>{
    const [currentSlide,setCurrentSlide]=useState(0);
    const prevSlide=()=>{
    setCurrentSlide(currentSlide===0 ?2 :currentSlide-1)

    }
    const nextSlide=()=>{
     setCurrentSlide(currentSlide===2 ?0:currentSlide+1)
    }
      
    return (
        <div  className="Slider">
        <div className="icon1">
            <ArrowBackIosNewSharpIcon onClick={prevSlide} sx={{ fontSize:43 }}/>
        </div>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}%)`}}>
        <SliderDiv img1={data[0].img1} img2={data[0].img2} desc={data[0].desc} part1={data[0].part1}/>
        <SliderDiv img1={data[1].img1} img2={data[1].img2} desc={data[1].desc} part1={data[1].part1}/>
        <SliderDiv img1={data[2].img1} img2={data[2].img2}desc={data[2].desc} part1={data[2].part1}/>
        </div>
        
        <div className="icon2">
        <ArrowForwardIosSharpIcon onClick={nextSlide} sx={{ fontSize:43 }}/>
        </div>
        
        </div>
    )
}
export default Slider;