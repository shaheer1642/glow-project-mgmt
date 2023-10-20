const express = require('express')
const router = express.Router()
const passport = require('passport')
const { body, param } = require('express-validator')
const { json } = require('body-parser')

router.get('/reliefweb/projects', (req, res) => {
    fetch('https://api.reliefweb.int/v1/jobs?limit=30')
        .then(projects => projects.json())
        .then((projects) => {
            Promise.all(projects.data.map((project, index) => new Promise((resolve, reject) => {
                fetch(project.href)
                    .then(detail => detail.json())
                    .then(detail => {
                        projects.data[index].detail = detail.data[0]
                        resolve()
                    }).catch(reject)
            }))).then(() => {
                res.send(projects)
            }).catch(console.error)
        }).catch(console.error)
})

module.exports = router