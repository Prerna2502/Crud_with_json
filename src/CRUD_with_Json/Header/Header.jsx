import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <nav class="navbar navbar-dark bg-dark pr-4 pl-5 navbar-expand-lg">
            <a class="navbar-brand fw-bold" href=".">Route_Example</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href=".">Home <span class="sr-only">(current)</span></a> */}
                        <Link to='.'>Home</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="about">About</a> */}
                        <Link to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="contact">Contact Us</a> */}
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="add_product">Add Product</a> */}
                        <Link to='/add_product'>Add Product</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="show_product">Show Products</a> */}
                        <Link to='/show_product' className='nav-item'>Show Products</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
