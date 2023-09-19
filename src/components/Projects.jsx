import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Projects() {
  const projectData = require('./projectData.json');
  return (
    <>
    <section id="Projects">
        <div className='container'>
          <div className="row">
            <h2 className='text-center'>PORTFOLIO</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {projectData.map((project) => (
              <div key={project.id} className="col-md-4">
                <div className="card mb-4">
                  <img  src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">Description of the project, if any.</p>
                    <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                    <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>
    </>
  );
}

export default Projects;
