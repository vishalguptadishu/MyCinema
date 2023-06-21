import './NextButton.css'

const NextButton =({ onClick1, currentIndex })=>{

  const handleClick = () => {
    if(onClick1){
      onClick1()
    }else {
      currentIndex()
    }
  };

 
    return (
        <div className='NextButton' onClick={handleClick} >
          <img src="https://www.jiocinema.com/images/carousel/ForwardArrow.svg"  alt="" />
        </div>
    )
}
export default NextButton;