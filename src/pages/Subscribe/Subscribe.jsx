
import { Link } from 'react-router-dom';
import './Subscribe.css'
const Subscribe =()=>{
    return (
        <div className="Subscribe">
          <div className="headar">
            <h1>Join Premium</h1>
            <h4>Welcome to the new home of all your favourite Hollywood content. The biggest, the best. Exclusively yours.</h4>
          </div>

          <div className='Subscribe_cart'>
            <div className='cart_top'>
           <h2>Best of Hollywood</h2>
            <li>Watch on any device</li>
            <li>Highest video & audio quality</li>
            <li>Upto 4 devices simultaneously</li>
            </div>
          <div className='cart_bottom'> 
            <p className='cart_bottom_p' >12 Months</p>
            <h1> <samp>₹</samp> 999</h1>
          </div>
          </div>

          <div className='discription_p'>
            <p>By continuing you agree to our <span>Terms of Use</span>and acknowledge that you have read our <span> Privacy Policy</span> .</p>
          </div>

          <div className='payment_button' >
           <Link to={"/SignIn"}><button>Continue and pay ₹999</button></Link> 

          </div>
          
        </div>
    )
}
export default Subscribe;