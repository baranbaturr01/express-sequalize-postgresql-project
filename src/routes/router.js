import {Router} from "express";

const router = Router();
import {validate, validateParams} from "../middleware/validate.js";

import AuthValidation from "../validations/Auth/AuthValidation.js";
import BookValidation from "../validations/Book/BookValidation.js";
import UserBookValidation from "../validations/UserBook/UserBookValidation.js";

import AuthController from '../controllers/Auth/AuthController.js';
import BookController from '../controllers/Book/BookController.js';
import UserBookController from '../controllers/UserBook/UserBookController.js';
/*Auth*/
router.post('/users', validate(AuthValidation.create), AuthController.createUser);
router.get('/users', AuthController.getAll);
router.get('/users/:id', validateParams(AuthValidation.get_user_by_id), AuthController.getUserByUserId);

/*Book*/
router.post('/books', validate(BookValidation.create), BookController.createBook);
router.get('/books', BookController.getAllBooks);
router.get('/books/:book_id', validateParams(BookValidation.getBookByBookId), BookController.getBookByBookId);

// /*UserBook*/
router.post('/users/:user_id/borrow/:book_id', validateParams(UserBookValidation.borrowBookValidation), UserBookController.BorrowBook);
router.post('/users/:user_id/return/:book_id', validateParams(UserBookValidation.returnBookValidation), UserBookController.returnBook);

export default router