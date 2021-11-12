const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/Books');
const chapter_controller = require('../controllers/Chapters')
const footnote_controller = require('../controllers/Footnotes')
const jwtAuth = require('../middleware/jwtAuthentication');


// Book CRUD handlers

router.get('/books', book_controller.getAll)
      .post('/books', jwtAuth, book_controller.addBook);

router.get('/books/:book_id', book_controller.getOne)
.put('/books/:book_id', jwtAuth, book_controller.updateBook)
.delete('/books/:book_id', jwtAuth, book_controller.deleteBook);

// Chapter CRUD handlers.

router.get('/chapters', (req, res) => {
    res.send('<p>Get ALL Chapter models</p>')
}).post('/chapters', jwtAuth, (req, res) => {
    res.send('<p>Add NEW Chapter model</p>')
});

router.get('/chapters/:chapter_id', (req, res) => {
    res.send(`<p>Get Chapter with ID: ${req.params.chapter_id}</p>` )
}).put('/chapters/:chapter_id', jwtAuth, (req, res) => {
    res.send(`<p>Update Chapter with ID: ${req.params.chapter_id}</p>` )
}).delete('/chapters/:chapter_id', jwtAuth, (req, res) => {
    res.send(`<p>Delete Chapter with ID: ${req.params.chapter_id}</p>` )
});

// Footnote CRUD handlers

router.get('/footnotes', (req, res) => {
    res.send('<p>Get ALL Footnote models</p>')
}).post('/footnotes', jwtAuth, (req, res) => {
    res.send('<p>Add NEW Footnote model</p>')
});

router.get('/footnotes/:footnote_id', (req, res) => {
    res.send(`<p>Get Footnote with ID: ${req.params.footnote_id}</p>` )
}).put('/footnotes/:footnote_id', jwtAuth, (req, res) => {
    res.send(`<p>Update Footnote with ID: ${req.params.footnote_id}</p>` )
}).delete('/footnotes/:footnote_id', jwtAuth, (req, res) => {
    res.send(`<p>Delete Footnote with ID: ${req.params.footnote_id}</p>` )
});

module.exports = router