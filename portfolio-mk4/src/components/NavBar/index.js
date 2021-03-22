import React from "react";
import Resume from "../../assets/Resume.pdf"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-color" id="top-nav">
            <div className="container">
                <Link to={"/"}>
                    <a href="/" className="navbar-brand important">Peter Ting</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/projects"}>
                                <a href="/projects">
                                    <button className="nav-link nav-sub">Projects</button>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href={Resume} target="_blank" rel="noreferrer">
                                <button className="nav-link nav-sub">Resume</button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-sub" data-bs-toggle="modal" data-bs-target="#about-me-modal">About Me</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-sub" data-bs-toggle="modal" data-bs-target="#contact-me-modal">Contact Me</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;