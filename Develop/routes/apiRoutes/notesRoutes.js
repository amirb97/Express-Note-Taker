const router = require('express').Router();
//const {} = require('../../public/assets/js/index');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
    console.log('GET /api/notes test');
});

router.post('/notes', (req, res) => {
    console.log('save button clicked');
});

module.exports = router;
