const Footnote = require('../models/Footnote');
const { getOne } = require('./Books');

exports.getAll = async (req, res) => {

};

exports.getOne = async (req, res) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);
};

exports.addFootnote = async (req, res) => {

};

exports.deleteFootnote = async (req, res) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);
};

exports.updateFootnote = async (req, res) => {
    const footnote_by_id = await Footnote.findByPk(req.params.footnote_id);
};