const Chapter = require('../models/Chapter');
const Footnote = require('../models/Footnote');

exports.getAll = async (req, res) => {
    const chapters_all = await Chapter.findAll({
        include: [{ model: Footnote}]
    });

    res.status(200).json(chapters_all)
};

exports.getOne = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.chapter_id);

    if (chapter_by_id) {
        res.status(200).json(chapter_by_id);
    } else {
        res.status(404).json({
            message: "No Chapter with that ID found."
        });
    }
};

exports.addChapter = async (req, res) => {

    try {
        const new_chapter = await Chapter.build({
            chapterNo: req.body.chapterNo,
            contents: req.body.contents,
            translator: req.body.translator,
            yearOfTranslation: req.body.yearOfTranslation,
            BookId: req.body.BookId
            });

        await new_chapter.save();
        
        res.status(200).json({
            message: "Saved new Chapter successfully.",
            chapter: new_chapter
        })
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
};

exports.deleteChapter = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.chapter_id);

    if (chapter_by_id) {
        await chapter_by_id.destroy()
        res.status(204).json({
            message: `Book with ID ${chapter_by_id} succesfully deleted`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Book with ID: ${req.body.id}`
        })
    }    
};

exports.updateChapter = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.footnote_id);

    chapter_by_id.set({
        chapterNo: req.body.chapterNo,
        contents: req.body.contents,
        translator: req.body.translator,
        yearOfTranslation: req.body.yearOfTranslation
    });

    if (chapter_by_id) {
        await chapter_by_id.save();

        res.status(200).json({
            message: `Chapter with ID: ${chapter_by_id} updated.`
        });
    } else {
        res.status(404).json({
            message: `Could not locate any Chapter with ID: ${req.json.id}`
        })
    }   
};