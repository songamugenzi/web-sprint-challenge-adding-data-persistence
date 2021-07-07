const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.post("/projects", (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to add new project" });
    });
});

router.get("/projects", (req, res) => {
  Projects.findProject()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve projects" });
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to add new resource" });
    });
});

router.get("/resources", (req, res) => {
  Projects.findResource()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve resources" });
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to add new task" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.findTask()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve tasks" });
    });
});

module.exports = router;
