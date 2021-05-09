const router = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { notes } = require('../../db/db.json')

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    function createNewNote(body, notesArray) {
        const note = body;
        notesArray.push(note);
        fs.writeFileSync(
            path.join(__dirname, "../../db/db.json"),
            JSON.stringify({ notesArray }, null, 2)
        );
        return note;
    }
    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;

// const { db } = require('../../db/db.json');
// const readNote = fs.readFileSync("./db/db.json", "UTF-8")

// if (readNote) {
//     let savedNotes = JSON.parse(readNote)
//     notesArray = savedNotes
// } else {
//     notesArray = []
// }



// router.post('/notes', (res, req) => {
//     const uuid = uuidv4();
//     const newNote = {
//         id: uuid,
//         title: req.body.title,
//         text: req.body.text
//     };
//     console.log(newNote);
//     notesArray.push(newNote)
//     res.json(newNote)

//     fs.writeFileSync('./db/db.json', JSON.stringify(notesArray, null, 2));
// });