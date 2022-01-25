const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/Notes');
const db = require('../../db/db.json');

// retrieves all notes from the db.json database
router.get('/notes', (req, res) => {
    res.json(db);
    console.log('GET /api/notes test');
});

// creates a new note when the save button is pressed
router.post('/notes', (req, res) => {
    // creates a unique id that is the length of the db
    req.body.id = db.length.toString();

    // calls function from Notes.js file that creates and stores a new note in the db
    const note = createNewNote(req.body, db);
    res.json(note);
});

// deletes a note when it is clicked on
router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.params.id, db);
    res.json(note);
});

module.exports = router;
