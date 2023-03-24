import React from 'react';
import { Project } from '../../services/ExportImages';

export default function ProjectCard() {
  const { module, block,
  name,
  alias,
  stack,
  description,
  image,
  repo,
  deploy } = this.props;

  const hasDeploy = deploy === '' ? false : true

  return (
    <div className="project-grid-item">
      <img
        className="project-grid-item-imagem"
        src={image === '' ? Project : image}
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
        <p className='task-title'>
          Proposto:
        </p>
        <p className='task-content'>
          {description}
        </p>
        {/* botão para repositório */}
        {/* condicional para exibir botão deploy */}
        {/* BadgeTag fazer um map em stack */}
      </div>

    </div>
  )
}