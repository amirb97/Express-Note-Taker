const fs = require('fs');
const path = require('path');

function createNewNote(body, dbArray) {
    const note = body;
    dbArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(dbArray)
    );
    return note;
}

module.exports = {
    createNewNote
}
