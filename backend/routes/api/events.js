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
        hostId,
        venueId,
        categoryId,
        name,
        date,
        capacity,
        image,
    } = req.body;

    const newEvent = await Event.create({
        hostId,
        venueId,
        categoryId,
        name,
        date,
        capacity,
        image,
    })
    // console.log('newEvent = ', newEvent)
    res.json(newEvent)
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.id)
    event.hostId = req.body.hostId
    event.venueId = req.body.venueId
    event.categoryId = req.body.categoryId
    event.name = req.body.name
    event.date = req.body.date
    event.capacity = req.body.capacity
    event.image = req.body.image

    await event.save()
    res.json(event)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.id)
    await event.destroy();
    res.json({})
}))

module.exports = router