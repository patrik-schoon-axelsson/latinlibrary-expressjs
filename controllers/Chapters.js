const Chapter = require('../models/Chapter');
const Footnote = require('../models/Footnote');

exports.getAll = async (req, res) => {
    const chaptersAll = await Chapter.findAll({
        include: [{ model: Footnote}]
    });
};

exports.getOne = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.chapter_id);
};

exports.addChapter = async (req, res) => {

};

exports.deleteChapter = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.chapter_id);
};

exports.updateChapter = async (req, res) => {
    const chapter_by_id = await Chapter.findByPk(req.params.chapter_id);
};