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
    const [ObjIndex, setObjIndex] = useState(0);
    
    const NextupdateIndex = () => {
        if(ObjIndex===obj1.length-1){
            setObjIndex(0)
        }else {
            setObjIndex(ObjIndex + 1)
        }
        
      };

    const PrevupdateIndex = () => {
        if(ObjIndex===0){
            setObjIndex(obj1.length-1)
        }else {
            setObjIndex(ObjIndex - 1)
        }
        
      };

      function ponitBtn(ind){
        setObjIndex(ind)
      }

    return (
        <div className="Sliding_img" >
                <div className="Posters"  >
                    <div className='div1' >
                      <h1>Bloody Daddy</h1>
                    </div> 
                    <div className='div2'>
                       <img key={ObjIndex}  src={obj1[ObjIndex].url} alt="img" />
                    </div>   
                </div>
              
            <div className='button'>
              <div className='DotBar' >
              {
                obj1.map((ele, ind)=>(<h3 className={(ind===ObjIndex) ? "active" : ""} onClick={()=>{ponitBtn(ind)}} >&bull;</h3> ))
              }

              </div> 
              <div className='NextPrevBtn'>
                <PrevButton PrevupdateIndex={PrevupdateIndex} />
                <NextButton  NextupdateIndex={NextupdateIndex} />
              </div>
                
            </div>
            
            
        </div>
    )
}
export default Sliding