import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { createTextSpanFromBounds } from 'typescript';


const Navbar: React.FC<NavbarProps> = () => {

    return (
        
        

        <nav className="row justify-content-center">
           
    
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/'>Home </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/login'>Login </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/register'>Register </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/add'>Add Todo</NavLink>
            <span className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" onClick={() => localStorage.clear()} >Logout</span>


        </nav>

    );



}



interface NavbarProps { }

export default Navbar;