const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/'

const profile = {
    name: "Ana",
    /*avatar: "/images/perfil.png",
    "monthly-budget": "000.000.000-00",
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,*/
}



routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", { profile }))
routes.get('/videos', (req, res) => res.render(views + "/videos"))


module.exports = routes;