const router = require('express').Router();

/*Auth*/
router.post('/users', require('../controllers/Auth/create-user'));
router.get('/users', require('../controllers/Auth/get-all-users'));
router.get('/users/:id', require('../controllers/Auth/get-user-by-id'));

/*Book*/
router.post('/books', require('../controllers/Book/create-book'));
router.get('/books', require('../controllers/Book/get-all-books'));
router.get('/books/:id', require('../controllers/Book/get-book-by-id'));

/*UserBook*/
router.post('/users/:user_id/borrow/:book_id', require('../controllers/UserBook/borrow-book'));
router.post('/users/:user_id/return/:book_id', require('../controllers/UserBook/return-book'));


module.exports = router;