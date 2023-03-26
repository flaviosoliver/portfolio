import React from 'react';
import { Project } from '../../services/ExportImages';
import { Button, Badge } from 'react-bootstrap';

export default function ProjectCard(props) {
    const { 
      project: {
        module, block, name, stack, description, image, repo, deploy }
    } = props;
  
    const hasDeploy = deploy === '' ? false : true
  
    return (
      <div className="project-grid-item">
        <img
          className="project-grid-item-imagem"
          src={image === '' ? Project : `${process.env.PUBLIC_URL}${image}`}
          alt={name}
        />
        <p className="project-title">
          {name}
        </p>
        <div className="project-content">
          <p className="project-module">
            {module}
          </p>
          <p className='project-block'>
            {block}
          </p>
          <div className='task-badge'>
            <h6>
              {stack.map((value) => (
                <Badge className="badge text-light bg-dark rounded-pill badge-custom" bg="dark" text="light">{value}</Badge>
              ))}
            </h6>
          </div>
          <p className='task-content'>
            <span className='task-title'>
              Proposta do projeto: {' '}
            </span>
            {description}
          </p>
          <div className='task-btn'>
            <div className='task-btn-repo'>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(repo, '_blank');
                }}>Ver Repositório
              </Button>
            </div>
            <div className='task-btn-deploy'>
              {hasDeploy && <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(deploy, '_blank');
                }}>Acessar Deploy
              </Button>}
            </div>
          </div>
        </div>
      </div>
    )
}