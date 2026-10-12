import data from './dataProjects';

try {
  localStorage.setItem('dataProjects', JSON.stringify(data));
} catch (e) {
  // localStorage may be disabled in private browsing
}

const skill = [];
let stacksResult = [];
data.forEach((e) => {
  if (Array.isArray(e.stack)) {
    skill.push(...e.stack);
  }
});
const stackUnique = [...new Set(skill)].filter(Boolean);
stacksResult = Array.from(stackUnique).sort();

try {
  localStorage.setItem('dataStacks', JSON.stringify(stacksResult));
} catch (e) {
  // localStorage may be disabled in private browsing
}

const readProjects = () => {
  try {
    const item = localStorage.getItem('dataProjects');
    return item ? JSON.parse(item) : data;
  } catch (e) {
    return data;
  }
};

const readStacks = () => {
  try {
    const item = localStorage.getItem('dataStacks');
    return item ? JSON.parse(item) : stacksResult;
  } catch (e) {
    return stacksResult;
  }
};

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
