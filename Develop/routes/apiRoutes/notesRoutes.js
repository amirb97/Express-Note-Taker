const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
    console.log('GET /api/notes test');
});

router.post('/notes', (req, res) => {
    console.log('save button clicked');
    console.log(req.body);
});

router.delete('/notes/:id', (req, res) => {
    console.log('Delete Requested');
});

module.exports = router;
