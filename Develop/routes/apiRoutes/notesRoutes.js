const router = require('express').Router();
const { createNewNote } = require('../../lib/Notes');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
    console.log('GET /api/notes test');
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    const note = createNewNote(req.body, db);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    console.log('Delete Requested');
});

module.exports = router;
