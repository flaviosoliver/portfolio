import data from './dataProjects';

localStorage.setItem('dataProjects', JSON.stringify(data));

const skill = [];
let stacksResult = [];
data.forEach((e) => skill.push(e.stack));
const stacksFull = skill.join(',');
const stacksStringReplace = stacksFull.split(',');
const stackUnique = [...new Set(stacksStringReplace)];
stacksResult = Array.from(stackUnique).sort();
localStorage.setItem('dataStacks', JSON.stringify(stacksResult));

const readProjects = () => JSON.parse(localStorage.getItem('dataProjects'));
const readStacks = () => JSON.parse(localStorage.getItem('dataStacks'));

export const getAllStacks = () => {
  const res = new Promise((resolve) => {
    setTimeout(() => {
      const stacks = readStacks();
      resolve(stacks);
    }, 1000);
  });
  return res;
};

export const getAllProjects = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const projects = readProjects();
      resolve(projects);
    }, 1000);
  });

export const newGetAllStacks = async () => {
  try {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        const stacks = readStacks();
        resolve(
          stacks.map((stack) => ({
            value: stack,
            label: stack,
          }))
        );
      }, 1000);
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProjectById = (id) => {
  const project = readProjects().find((proj) => proj.id === id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 1000);
  });
};

export const getProjectByStack = (stacksToFilter) => {
  const project = readProjects();
  const result = project.filter((proj) =>
    stacksToFilter.some((stack) => proj.stack.includes(stack))
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};
