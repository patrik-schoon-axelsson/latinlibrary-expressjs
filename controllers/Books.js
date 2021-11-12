const Book = require('../models/Book');
const bcrypt = require('bcrypt');
const Chapter = require('../models/Chapter');

exports.getAll = async (req, res) => {
    const book_all = await Book.findAll({
        include: [{ model: Chapter}]
    });
    res.status(200).json(book_all);
};

exports.getOne = async (req, res) => {
    const book_by_id = await Book.findByPk(req.params.book_id);

    if (book_by_id) {
        res.status(200).json(book_by_id);
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.json.id}`
        })
    }
}

exports.addBook = async (req, res) => {
    
    const new_book = await Book.build({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        yearOfPublicationCE: Date(req.body.yearOfPublicationCE)
    });

    new_book.save()
            .then(book => {
                res.status(200).json(book)
            })
            .catch(err => res.status(500).json({
                message: err.message
            })
        )
}

exports.deleteBook = async (req, res) => {
    const book_by_id = await Book.findByPk(req.params.book_id);

    if (book_by_id) {
        await book_by_id.destroy()
        res.status(204).json({
            message: `Book with ID ${book_by_id} succesfully deleted`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.json.id}`
        })
    }    
}

exports.updateBook = (req, res) => {
    const book_by_id = await Book.findByPk(req.params.book_id);

    if (book_by_id) {
        book_by_id.set({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            yearOfPublicationCE: Date(req.body.yearOfPublicationCE)
        });

        await book_by_id.save();

        res.status(200).json({
            message: `Book with ID: ${book_by_id} updated.`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.json.id}`
        })
    }   
}