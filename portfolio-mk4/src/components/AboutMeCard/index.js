import React from "react";

function AboutMe() {
    return (
        <div className="container">
            <div className="card card-content about-me border-info">
                <img src="./images/me.JPG" className="rounded img-fluid" alt="Peter" />
                <h1 className="important name">Peter Ting</h1>
                <p className="title important">Full Stack Web Developer</p>
                <p className="important">University of California, Riverside</p>
                <div>
                    <a href="https://www.linkedin.com/in/pting002/" target="_blank">
                        <i className="fa fa-linkedin contact-icon" style="font-size:40px; padding: 10px;"></i>
                    </a>
                    <a href="https://github.com/Pting1995" target="_blank">
                        <i className="fa fa-github contact-icon" style="font-size:40px; padding: 10px;"></i>
                    </a>
                    <a href="./assets/Resume.pdf" target="_blank">
                        <i className="far fa-file contact-icon" style="font-size:40px; padding: 10px;"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;