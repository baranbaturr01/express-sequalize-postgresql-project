const router = require('express').Router();


router.post('/add', require('../controllers/Auth/add'));
router.post('/find-by-name', require('../controllers/Auth/findByName'));
router.post('/delete', require('../controllers/Auth/delete'));
router.post('/get-all-users', require('../controllers/Auth/getAllUsers'));

module.exports = router;