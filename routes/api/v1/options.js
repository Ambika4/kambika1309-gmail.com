
const express = require('express');

const router = express.Router();

const optionApi=require('../../../controllers/api/v1/createOptions_api');

router.post('/create', optionApi.create);



module.exports = router;