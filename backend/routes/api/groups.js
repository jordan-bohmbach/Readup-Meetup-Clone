const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {Group} = require('../../db/models')

router.get('/', asyncHandler(async (req, res, next) => {
    const groupList = await Group.findAll()
    return res.json(groupList)
}))

module.exports = router;