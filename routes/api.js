const express = require('express');
const router = express.Router();

// Book CRUD handlers

router.get('/books', (req, res) => {
    res.send('<p>Get ALL Book models</p>')
}).post('/books', (req, res) => {
    res.send('<p>Add NEW Book model</p>')
});

router.get('/books/:book_id', (req, res) => {
    res.send(`<p>Get book with ID: ${req.params.book_id} Book model</p>` )
}).put('/books/:book_id', (req, res) => {
    res.send(`<p>Update book with ID: ${req.params.book_id} Book model</p>` )
}).delete('/books/:book_id', (req, res) => {
    res.send(`<p>Delete book with ID: ${req.params.book_id} Book model</p>` )
});

// Chapter CRUD handlers.

router.get('/chapters', (req, res) => {
    res.send('<p>Get ALL Chapter models</p>')
}).post('/chapters', (req, res) => {
    res.send('<p>Add NEW Chapter model</p>')
});

router.get('/chapters/:chapter_id', (req, res) => {
    res.send(`<p>Get Chapter with ID: ${req.params.chapter_id}</p>` )
}).put('/chapters/:chapter_id', (req, res) => {
    res.send(`<p>Update Chapter with ID: ${req.params.chapter_id}</p>` )
}).delete('/chapters/:chapter_id', (req, res) => {
    res.send(`<p>Delete Chapter with ID: ${req.params.chapter_id}</p>` )
});

// Footnote CRUD handlers

router.get('/footnotes', (req, res) => {
    res.send('<p>Get ALL Footnote models</p>')
}).post('/footnotes', (req, res) => {
    res.send('<p>Add NEW Footnote model</p>')
});

router.get('/footnotes/:footnote_id', (req, res) => {
    res.send(`<p>Get Footnote with ID: ${req.params.footnote_id}</p>` )
}).put('/footnotes/:footnote_id', (req, res) => {
    res.send(`<p>Update Footnote with ID: ${req.params.footnote_id}</p>` )
}).delete('/footnotes/:footnote_id', (req, res) => {
    res.send(`<p>Delete Footnote with ID: ${req.params.footnote_id}</p>` )
});

module.exports = router