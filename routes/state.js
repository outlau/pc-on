const express = require('express');
const router = express.Router();
const fs = require('fs');

const stateController = require('../controllers/state');

module.exports = router => {
  router.get('/state', stateController.get);
};
