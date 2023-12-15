const express = require('express')
const router = express.Router()
const { db } = require('../modules/db')

router.post('/users/login', (req, res) => {
    db.query(`SELECT * FROM users WHERE email = ${req.body.email} AND password = ${req.body.password}`)
    .then(db_res => {
        if (db_res.rowCount == 0) {
            res.sendStatus(404)
        } else {
            const user = db_res[0]
            delete user.password
            res.send(user)
        }
    }).catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

module.exports = router