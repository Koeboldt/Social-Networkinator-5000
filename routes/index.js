const router = require('express').router();
const api = require('./api');

router.use('/api', api);

module.exports = router;