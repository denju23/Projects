import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaUserPlus, FaCartPlus } from "react-icons/fa";
// import {  useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Navbar() {
    // const location = useLocation();
    const state = useSelector((state) => state.handleCart);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <div className="navbar-brand fw-b fs-4" > LA COLLECTION </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='/' className="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='/About' className="nav-link" >About</a>
                            </li>
                            <li className="nav-item">
                                <a href='/Products' className="nav-link" >Products</a>
                            </li>
                            <li className="nav-item">
                                <a href='/Contact' className="nav-link" >Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a href='/Login' className='btn btn-outline-dark me-1'><FaArrowAltCircleRight />  Login</a>
                        </div>
                        <div className='buttons'>
                            <a href='/Register' className='btn btn-outline-dark ms-2'><FaUserPlus />  Register </a>
                        </div>
                        <div className='buttons'>
                            <a href='/Cart' className='btn btn-outline-dark ms-2'><FaCartPlus />  Cart ({state.length}) </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;