const db = require("../data/db-config.js");

module.exports = {
  addProject,
  findProject,
  addResource,
  findResource,
  addTask,
  findTask,
};

function addProject(projectData) {
  return db("projects")
    .insert(projectData)
    .then(() => {
      return projectData;
    });
}

function findProject() {
  return db("projects");
}

function addResource(resourceData) {
  return db("resources")
    .insert(resourceData)
    .then(() => {
      return resourceData;
    });
}

function findResource() {
  return db("resources");
}

function addTask(taskData) {
  return db("tasks")
    .insert(taskData)
    .then(() => {
      return taskData;
    });
}

function findTask() {
  return db("tasks");
}
