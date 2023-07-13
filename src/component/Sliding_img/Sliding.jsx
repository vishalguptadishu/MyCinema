import './Sliding_img.css'
import PrevButton from "../../Bottons/PrevButton/PrevButton"
import NextButton from "../../Bottons/NextButton/NextButton"
import React, { useState } from 'react';




const Sliding=({obj})=>{

    const [ObjIndex, setObjIndex] = useState(0);
    const NextupdateIndex = () => {
        if(ObjIndex===obj.length-1){
            setObjIndex(0)
        }else {
            setObjIndex(ObjIndex + 1)
        }     
      };

    const PrevupdateIndex = () => {
        if(ObjIndex===0){
            setObjIndex(obj.length-1)
        }else {
            setObjIndex(ObjIndex - 1)
        }
        
      };

      function ponitBtn(ind){
        setObjIndex(ind)
      }

    return (
        <div className="Sliding_img" > 
               <div className="Posters" > 
                  <div className='div1' >
                    <h1>{obj[ObjIndex].Title}</h1>
                    <p>Hindi action U/A 16+</p>
                    <button>WATCH</button>
                  </div> 
                  <div className='div2'>
                    <img src={obj[ObjIndex].url} alt="Poster" /> 
                  </div>
                </div>
              
            <div className='button'>
              <div className='DotBar' >
              {
                obj.map((ele, ind)=>(<h3 key={ind} className={(ind===ObjIndex) ? "activedot" : ""} onClick={()=>{ponitBtn(ind)}} >&bull;</h3> ))
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