const path = require('path');
const express = require('express')
const router = express.Router();

// GET /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


// GET *

module.exports = router;