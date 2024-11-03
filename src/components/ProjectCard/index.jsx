/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { Project } from '../../services/ExportImages';

function ProjectCard(props) {
  const {
    project: { module, block, name, stack, description, image, repo, deploy },
  } = props;

  const hasDeploy = deploy !== '';

  return (
    <div className="project-grid-item">
      <img
        className="project-grid-item-imagem"
        src={image === '' ? Project : `${process.env.PUBLIC_URL}${image}`}
        alt={name}
      />
      <p className="project-title">{name}</p>
      <div className="project-content">
        <p className="project-module">{module}</p>
        <p className="project-block">{block}</p>
        <div className="task-badge">
          <h6>
            {stack.map((value) => (
              <Badge
                className="badge text-light bg-dark rounded-pill badge-custom"
                bg="secondary"
                text="dark"
                key={value}
              >
                {value}
              </Badge>
            ))}
          </h6>
        </div>
        <p className="task-content">
          <span className="task-title">Proposta do projeto: </span>
          {description}
        </p>
        <div className="task-btn">
          <div className="task-btn-repo">
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                window.open(repo, '_blank');
              }}
            >
              Repositório
            </Button>
          </div>
          <div className="task-btn-deploy">
            {hasDeploy && (
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(deploy, '_blank');
                }}
              >
                Acessar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    module: PropTypes.string,
    block: PropTypes.string,
    name: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    image: PropTypes.string,
    repo: PropTypes.string,
    deploy: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
