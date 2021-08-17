const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {Event} = require('../../db/models')

router.get('/', asyncHandler(async (req, res, next) => { 
    const eventList = await Event.findAll()
    return res.json(eventList)
}))

module.exports = router