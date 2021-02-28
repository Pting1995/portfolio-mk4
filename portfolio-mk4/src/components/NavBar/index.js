import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-color" id="top-nav">
            <div className="container">
                <a className="navbar-brand important" href="/">Peter Ting</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-sub" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-sub" href="./assets/Resume.pdf" target="_blank">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-sub" data-bs-toggle="modal" data-bs-target="#about-me-modal">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-sub" data-bs-toggle="modal" data-bs-target="#contact-me-modal">Contact Me</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;