import data from './dataProjects'

localStorage.setItem('dataProjects', JSON.stringify(data))

const readProjects = () => JSON.parse(localStorage.getItem('dataProjects'))

export const Param = {
    id: String,
    module: String,
    block: String,
    name: String,
    alias: String,
    stack: Array,
    description: String,
    image: String,
    repo: String,
    deploy: String | undefined,
}

export const getAllProjects = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const projects = readProjects()
      resolve(projects)
    }, 1000)
  })
)

export const getProjectById = (id) => {
  const project = readProjects().find(project => project.id === id)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project)
    }, 1000)
  })
}
export const getProjectByModule = (module) => {
  const project = readProjects().find(project => project.module === module)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project)
    }, 1000)
  })
}
export const getProjectByName = (name) => {
  const project = readProjects().find(project => project.name === name)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project)
    }, 1000)
  })
}
export const getProjectByAlias = (alias) => {
  const project = readProjects().find(project => project.alias === alias)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project)
    }, 1000)
  })
}
export const getProjectByStack = (stack) => {
  const project = readProjects().find(project => project.stack === stack)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project)
    }, 1000)
  })
}

