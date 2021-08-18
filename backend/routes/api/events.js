const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {Event, Venue, Group} = require('../../db/models')

router.get('/', asyncHandler(async (req, res, next) => { 
    const eventList = await Event.findAll({
        include: [Venue, Group]
    })
    return res.json(eventList)
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const {
        name,
        date,
        capacity,
        image,
        venue,
        category
    } = req.body;

    const newEvent = await Event.Create({
        name,
        date,
        capacity,
        image,
        venue,
        category
    })
    console.log('newEvent = ', newEvent)
    return newEvent;
}))

module.exports = router