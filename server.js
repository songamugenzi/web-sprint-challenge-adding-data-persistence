const express = require("express");

const ProjectsRouter = require("./projects/projects-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
