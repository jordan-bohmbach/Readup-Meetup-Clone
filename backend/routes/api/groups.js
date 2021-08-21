const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {Group} = require('../../db/models')

router.get('/', asyncHandler(async (req, res, next) => {
    const groupList = await Group.findAll()
    return res.json(groupList)
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const {
        type,
        image,
        ownerId,
    } = req.body;

    const newGroup = await Group.create({
        type,
        image,
        ownerId,
    })
    console.log('newGroup = ', newGroup)
    res.json(newGroup);
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const group = await Group.findByPk(req.params.id)
    group.type = req.body.type
    group.image = req.body.image

    await group.save()
    res.json(group)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const group = await Group.findByPk(req.params.id)
    await group.destroy();
    res.json({})
}))

module.exports = router;