import React from "react";

function ProjectCard(props) {
    return (
        <div className="d-flex align-items-stretch">
            <div className="card project-card border-info">
                <h5 className="card-header important">{props.projectName}</h5>
                <div className="card-body">
                    <img src={props.image} className="gif-project" alt="gif of project" ALIGN="left" />
                    <h6 className="skills">Skills Showcase: {props.skillsShowcased}</h6>
                    <p className="card-text project-description">{props.desc}</p>
                    <a href={props.deployedLink} className="btn btn-info" target="blank">Live Site</a>
                    <a href={props.gitHubLink} className="btn btn-info" target="blank">GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;