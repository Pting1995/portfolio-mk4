import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

function Projects() {

    return (
        <div className="container">
            {projects.map((project, index) => {
                return <ProjectCard
                    key={index}
                    projectName={project.projectName}
                    skillsShowcased={project.skillsShowcased}
                    desc={project.desc}
                    image={project.image}
                    deployedLink={project.deployedLink}
                    gitHubLink={project.gitHubLink} />
            })}
        </div>
    );
}


export default Projects;