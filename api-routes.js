const router = require("express").Router();

router.get('/', (req,res) => {
    res.json({
        status: 'API is working',
        message:'Welcome to RESTHub crafted with mixed feelings!'
    })

})

module.exports = router;