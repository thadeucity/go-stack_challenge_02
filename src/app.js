const express = require("express");
const { uuid, isUuid } = require ('uuidv4');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function getRepoIndex(id){
  return repositories.findIndex(repo => repo.id === id);  
}

function validateRepoId(req, res, next){
  const { id } = req.params;

  if (!isUuid(id)) return res.status(400).json({error: 'Invalid repository ID.'});

  return next();
}

app.use('/repositories/:id', validateRepoId);

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };
  
  repositories.push(repository);

  return res.json(repository);

});

app.put("/repositories/:id", (req, res) => {
  const { title, url, techs } = req.body;

  const repositoryIndex = getRepoIndex(req.params.id);

  if(repositoryIndex < 0){
    return res.status(400).json({error: 'Repository Not Found'})
  }

  const repository = {
    ... repositories[repositoryIndex],
    title,
    url,
    techs
  };

  repositories[repositoryIndex] = repository;

  return res.json(repository);
});

app.delete("/repositories/:id", (req, res) => {
  const repositoryIndex = getRepoIndex(req.params.id);

  if(repositoryIndex < 0){
    return res.status(400).json({error: 'Repository Not Found'})
  }

  repositories.splice(repositoryIndex, 1);

  return res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  const repositoryIndex = getRepoIndex(req.params.id);

  if(repositoryIndex < 0){
    return res.status(400).json({error: 'Repository Not Found'})
  }

  repositories[repositoryIndex].likes++;

  return res.json(repositories[repositoryIndex]);
});

module.exports = app;
