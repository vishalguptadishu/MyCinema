import './NextButton.css'

const NextButton =({ NextupdateIndex })=>{

  const handleClick = () => {
    NextupdateIndex();
  };

    return (
        <div className='NextButton' onClick={handleClick} >
          <img src="https://www.jiocinema.com/images/carousel/ForwardArrow.svg"  alt="" />
        </div>
    )
}
export default NextButton;