import './Sliding_img.css'
import PrevButton from "../../Bottons/PrevButton/PrevButton"
import NextButton from "../../Bottons/NextButton/NextButton"
import React, { useState } from 'react';
let obj1 =[
    {Title:"Bloody Daddy", url:"https://v3img.voot.com/v3Storage/assets/bloody-daddy-16x9-1686474684847.jpg"},
    {Title:"The Idol", url:"https://v3img.voot.com/v3Storage/assets/theidol_carousel_16x9-1685926783746.jpg"},
    {Title:"Bhediya", url:"https://v3img.voot.com/v3Storage/assets/bhediya_16x9-1686132670294.jpg"},
    {Title:"Rafuchakkar", url:"https://v3img.voot.com/v3Storage/assets/rafuchakkar-16x9-1686754742076.jpg"},
    {Title:"Shiv Shakti", url:"https://v3img.voot.com/v3Storage/assets/shiv-shakti-16x9-1687085161599.jpg"},
    {Title:"Based On A True Story", url:"https://v3img.voot.com/v3Storage/assets/bots_16x9-1685796544833.jpg"},
    {Title:"Shazam!", url:"https://v3img.voot.com/jioimage/newcpp/648833a8a6bb96753b3996fd/648833a8a6bb96753b3996fd_1686648143512_aa.jpg"},
]



const Sliding=()=>{
    // const [currentIndex, setCurrentIndex] = useState(0);

    const currentIndex = () => {
        
        alert("hello11111111111")
      };

    return (
        <div className="Sliding_img" >
                <div className="Posters"  >
                    <div className='div1' >
                      <h1>Bloody Daddy</h1>
                      <p>ABiyoiid dbfc ohs</p>
                    </div> 
                    <div className='div2'>
                       {/* <img  src={obj1[currentIndex].url} alt="img" /> */}
                    </div>   
                </div>
            <div className='button'>
            <PrevButton />
            <NextButton currentIndex={currentIndex}  />
            </div>
           
            
        </div>
    )
}
export default Sliding