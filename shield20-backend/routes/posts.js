const router = require('express').Router();
const verify = require('../utils/verifyToken');

router.get('/', verify, (req, res) => {
    res.json({posts: {
        title: 'my frist post',
        description: 'random data'
    }})
})

module.exports = router;