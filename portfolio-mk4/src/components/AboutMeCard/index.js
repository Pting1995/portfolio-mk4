import React from "react";
import image from "../../assets/images/me.JPG"
import Resume from "../../assets/Resume.pdf"

function AboutMe() {
    return (
        <div className="container">
            <div className="card card-content about-me border-info">
                <img src={image} className="rounded img-fluid" alt="Peter" />
                <h1 className="important name">Peter Ting</h1>
                <p className="title important">Full Stack Web Developer</p>
                <p className="important">University of California, Riverside</p>
                <div>
                    <a href="https://www.linkedin.com/in/pting002/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin contact-icon about-icon"></i>
                    </a>
                    <a href="https://github.com/Pting1995" target="_blank" rel="noreferrer">
                        <i className="fa fa-github contact-icon about-icon"></i>
                    </a>
                    <a href={Resume} target="_blank" rel="noreferrer">
                        <i className="fa fa-file contact-icon about-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;