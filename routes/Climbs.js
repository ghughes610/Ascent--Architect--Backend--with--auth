const express = require('express')
const router = express.Router()
const { Climb } = require('../models/Climb')

router.get('/climbs', (_, res) => {
    Climb.query()
        .then(climbs => res.json(climbs))
})

router.get('/climbs/:id', (req, res) => {
    const id = req.params.id
    Climb.query()
    .where('id', id)
    .then(climb => res.json(climb))
})

router.post('/climbs', (req, res) => {
    const climb = req.body
    Climb.query()
    .insert(climb)
    .returning('*')
    .then(climb => res.send(climb))
})

router.delete('/climbs/:id', (req, res) => {
    const id = req.params.id
    Climb.query()
    .where('id', id)
    .delete()
    .then(deletedClimb => res.json(deletedClimb))
})


router.patch('/climbs/:id', (req, res) => {
    const id = req.params.id
    const updatedClimb = req.body
    Climb.query()
    .where('id', id)
    .update(updatedClimb)
    .then(updatedClimb => res.status(200).json(updatedClimb))
})

module.exports = { climbRouter: router }