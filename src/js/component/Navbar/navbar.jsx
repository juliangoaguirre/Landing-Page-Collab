import React from 'react';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item pe-2">
                        <a className="home text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item pe-2">
                        <a className="about text-light" href="#">About</a>
                    </li>
                    <li className="nav-item pe-2">
                        <a className="services text-light" href="#">Services</a>
                    </li>
                    <li className="nav-item pe-2">
                        <a className="contact text-light" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;