
const express = require('express');

const router = express.Router();

const questionApi=require('../../../controllers/api/v1/createQuestions_api');

router.post('/create', questionApi.create);



module.exports = router;