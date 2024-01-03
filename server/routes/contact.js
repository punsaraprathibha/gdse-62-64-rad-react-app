const express = require('express');
const router = express.Router();

router.post('/submit', function (req, res, next) {
    const requestedData = req.body;
    console.log(requestedData);
    res.send("Contact details received successfully!");
});

module.exports = router;