import React from 'react';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="home" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="about" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="services" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="contact" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;