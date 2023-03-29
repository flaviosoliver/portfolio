import data from './dataProjects';

localStorage.setItem('dataProjects', JSON.stringify(data));

const readProjects = () => JSON.parse(localStorage.getItem('dataProjects'));

export const getAllProjects = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const projects = readProjects();
      resolve(projects);
    }, 1000);
  })
);

export const getProjectById = (id) => {
  const project = readProjects().find((proj) => proj.id === id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};
export const getProjectByModule = (module) => {
  const project = readProjects().find((proj) => proj.module === module);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};
export const getProjectByName = (name) => {
  const project = readProjects().find((proj) => proj.name === name);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};
export const getProjectByAlias = (alias) => {
  const project = readProjects().find((proj) => proj.alias === alias);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};
export const getProjectByStack = (stack) => {
  const project = readProjects().find((proj) => proj.stack === stack);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};
