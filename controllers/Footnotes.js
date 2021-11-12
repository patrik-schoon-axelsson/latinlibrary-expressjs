const Footnote = require('../models/Footnote');

exports.getAll = async (req, res, next) => {
    if (err) {
        next(err);
    }
    const all_footnotes = await Footnote.findAll();
    res.status(200).json(all_footnotes);
};

exports.getOne = async (req, res, next) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);
    if (err) {
        next(err)
    }

    res.status(200).json(footnote_by_id);
};

exports.addFootnote = async (req, res) => {
    const user = User.findByPk(req.user.id);

    const new_footnote = Footnote.build({
        comment: req.body.comment,
        reference: req.body.reference,
        User: user,
        url: req.body.url
    }); 
};

exports.deleteFootnote = async (req, res) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);

    if (footnote_by_id) {
        await footnote_by_id.destroy()
        res.status(204).json({
            message: `Book with ID ${footnote_by_id} succesfully deleted`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.json.id}`
        })
    }    
};

exports.updateFootnote = async (req, res) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);

    footnote_by_id.set({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        yearOfPublicationCE: Date(req.body.yearOfPublicationCE)
    });
    if (book_by_id) {
        await footnote_by_id.save();

        res.status(200).json({
            message: `Book with ID: ${footnote_by_id} updated.`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.json.id}`
        })
    }   
};