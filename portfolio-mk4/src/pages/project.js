import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

function Projects() {

    return (
        <div className="container">
            {projects.map(project => {
                return (<ProjectCard projectName={project.projectName} skillsShowcased={project.skillsShowcased} desc={project.desc} image={project.image} deployedLink={project.deployedLink} gitHubLink={project.gitHubLink} />)
            })}

        </div>
    );
}


export default Projects;