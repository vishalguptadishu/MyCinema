import './PrevButton.css'

const PrevButton =({PrevupdateIndex})=>{
 function HandalPrevBtn(){
  PrevupdateIndex()
 }
  
    return (
        <div className='PrevButton' onClick={HandalPrevBtn} >
          <img src="https://www.jiocinema.com/images/carousel/BackArrow.svg" alt="btn_imhg" />
        </div>
    )
}
export default PrevButton;