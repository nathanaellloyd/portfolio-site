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
                        home
                    </NavLink>
                    <NavLink exact className="link" to='/aboutme' activeClassName="activeLink">
                        about me
                    </NavLink>
                    <NavLink exact className="link" to='/work' activeClassName="activeLink">
                        work
                    </NavLink>
                    <NavLink exact className="link" to='/contact' activeClassName="activeLink">
                        contact
                    </NavLink>
                </ul>
            </nav>
        </header>
        )
    }
    
    export default NavBar; 