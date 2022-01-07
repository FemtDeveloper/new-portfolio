import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (<>
        <div className='nav-container'>
            <div className="home-logo"><h2>home</h2>
            <span><i className={!showMenu?"fas fa-bars":"fas fa-times"}  onClick={() => setShowMenu(!showMenu)}></i></span></div>
             <ul className='nav-items'>
                <a href=""><li> PROJECTS</li></a>
                <a href=""><li> CONTACT</li></a>
                <a href=""><li> ABOUT ME</li></a>
            </ul>
            
       
        </div> {showMenu &&             
                <ul className={showMenu ? 'nav-items--mobile': 'nav-items--mobile active'}>
                    <a href=""><li> HOME</li></a>
                <a href=""><li> PROJECTS</li></a>
                <a href=""><li> CONTACT</li></a>
                <a href=""><li> ABOUT ME</li></a>
            </ul>
            }</>
    )
}

export default Navbar
