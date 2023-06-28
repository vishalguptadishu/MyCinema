import './Navbar.css'

import Search from '../search/Search'



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
                    <li>Movies</li>
                    <li>TVs</li>
                    <li>Premium</li>
                </ul>
                <div className='Search' >
                <Search />
                </div>

                <div className='info' >
                  <img src="https://www.jiocinema.com/images/profile/profile_avatar.svg" alt="" />
                </div>
                
            </div>
            
        </div>
    )
}

export default Navbar;