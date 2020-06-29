const { Router } = require('express');
const path = require('path');
const fs = require('fs');

const router = Router();

router.get('/resume', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 'data', 'cv-anna-sapon.pdf'));
  } catch (err) {
    next(err);
  }
});

const projectsPath = path.join(__dirname, 'data', 'projects.json');

router.get('/projects', (req, res, next) => {
  try {
    fs.readFile(projectsPath, 'utf-8', (err, data) => {
      if (err) next(err);
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
});

router.get('/projects/:id', (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
    const project = projects.find((el) => el.id === id);
    if (!project) res.status(404).send();
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
});

router.get('*', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
