const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Mblog = require('../models/mblog');


// get all blogs
router.get('/', (req, res) => {
    Mblog.find(function(err, mblogs) {
        if (err) {
            console.log(err);
        } else {
            res.json(mblogs);
        }
    });
});


// post blog
router.post('/', (req,res) => {
    const mblog = new Mblog(req.body);
    mblog.save()
        .then(mblog => {
            res.status(200).json({mblog});
        })
        .catch(err => {
            res.status(400).send('micro blog adding failed');
        });

});



module.exports = router;
