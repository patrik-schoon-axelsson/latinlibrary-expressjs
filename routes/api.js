const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/Books');
const chapter_controller = require('../controllers/Chapters')
const footnote_controller = require('../controllers/Footnotes')
const jwtAuth = require('../middleware/jwtAuthentication');
const adminAuth = require('../middleware/adminAccess')


// Book CRUD handlers

router.get('/books', book_controller.getAll)
      .post('/books', jwtAuth, adminAuth, book_controller.addBook);

router.get('/books/:book_id', book_controller.getOne)
.put('/books/:book_id', jwtAuth, adminAuth,  book_controller.updateBook)
.delete('/books/:book_id', jwtAuth, adminAuth, book_controller.deleteBook);

// Chapter CRUD handlers.

router.get('/chapters', chapter_controller.getAll).post('/chapters', jwtAuth, chapter_controller.addChapter);

router.get('/chapters/:chapter_id', chapter_controller.getOne)
    .put('/chapters/:chapter_id', jwtAuth, adminAuth, chapter_controller.updateChapter)
    .delete('/chapters/:chapter_id', jwtAuth, adminAuth, chapter_controller.deleteChapter);

// Footnote CRUD handlers

router.get('/footnotes', footnote_controller.getAll).post('/footnotes', jwtAuth, footnote_controller.addFootnote);

router.get('/footnotes/:footnote_id', footnote_controller.getOne)
.put('/footnotes/:footnote_id', jwtAuth, adminAuth, footnote_controller.updateFootnote)
.delete('/footnotes/:footnote_id', jwtAuth, adminAuth, footnote_controller.deleteFootnote);

module.exports = router