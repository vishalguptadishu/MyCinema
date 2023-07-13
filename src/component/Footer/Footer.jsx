import './Footer.css'
import { AiFillFacebook , AiOutlineTwitter ,AiFillInstagram , AiFillYoutube } from "react-icons/ai";

const Footer =()=>{
    return (
        <div className='Footer'>
          <div className='part1'>
            <div className='part1_div1'>
                <h2>MyCinema</h2>
                <p>For You</p>
                <p>Sports</p>
                <p>Free</p>
                <p>Premium</p>
                <p>IND vs WI Schedule</p>
            </div>
            <div className='part1_div2'>
                <h2>Support</h2>
                <p>Help Center</p>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
                <p>Content Complaints</p>
            </div>
          </div>
          <div className='part2'>
            <div className='part2_div1'>
              <h1>Connect With Us</h1>
              <div className='soicon' >
              <AiFillFacebook />
              <AiOutlineTwitter />
              <AiFillInstagram />
              <AiFillYoutube />
              </div>
              
            </div>
            <div className='part2_div2'>
              <h1>Download the App</h1>
              <div className='img_logo'>
                <img src="https://www.jiocinema.com/images/googlePlay.svg " alt="" />
                <img src="https://www.jiocinema.com/images/appleStore.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
    )
}
export default Footer;