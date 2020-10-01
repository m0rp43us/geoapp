const express = require('express');
const { getStores } = require('../controller/stores');
const router = express.Router();


router.route('/').get(getStores);



module.exports=router;