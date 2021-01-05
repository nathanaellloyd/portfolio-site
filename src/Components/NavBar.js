import React from 'react'; 
import { NavLink } from 'react-router-dom'


function NavBar ()  {

    return(
        <header> 
            <NavLink exact to="/">
            </NavLink>
            <nav className="nav-bar">
                <ul>
                    <NavLink exact className="link" to='/' activeClassName="activeLink">
                        Home
                    </NavLink>
                    <NavLink exact className="link" to='/work' activeClassName="activeLink">
                        Work
                    </NavLink>
                    <NavLink exact className="link" to='/music' activeClassName="activeLink">
                        Music
                    </NavLink>
                    <NavLink exact className="link" to='/contact' activeClassName="activeLink">
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </header>
        )
    }
    
    export default NavBar; 