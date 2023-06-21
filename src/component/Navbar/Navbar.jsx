import './Navbar.css'

import Search from '../search/Search'
import NextButton from '../../Bottons/NextButton/NextButton'
function alartHendal(){
    alert("helloooo2222222222")
}

const Navbar =()=>{

   
    return (
        <div className="Navbar">
            <div className='part_1'>
                <div className='logo'>
                <img src="https://www.jiocinema.com/images/jc_logo.svg" alt="" />
                </div>
                <p>JioCinema</p>
                <ul>
                    <li>Subscribe</li>
                    <li>For You</li>
                    <li>Sports</li>
                    <li>Free</li>
                    <li>Premium</li>
                </ul>
                <div className='Search' >
                <Search />
                </div>

                <div className='info' >
                  <img src="https://www.jiocinema.com/images/profile/profile_avatar.svg" alt="" />
                </div>
                
            </div>
            <NextButton onClick1={alartHendal}  />
        </div>
    )
}

export default Navbar;