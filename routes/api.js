const express = require('express');
const Value = require('../models/Value');

// router
const router = express.Router();

// route to get data from store
router.get('/get/:key', async (req, res) => {
    const key = req.params.key;
    try {
        const value = await Value.findOne({ key });

        if (!value) {
            return res.status(401).send('key not found');
        }
        return res.json({ key, value });
    } catch (err) {
        res.status(500).send('server error');
    }
});

// route to save data to key-value store
router.post('/save', async (req, res) => {
    try {
        const data = req.body;
        const valueData = {
            key: data.key,
            value: data.value,
        };

        const preExisting = await Value.findOne({ key: valueData.key });
        if (preExisting) {
            return res.status(400).send('key already present');
        }
        const value = new Value(valueData);

        await value.save();

        return res.json(value);
    } catch (err) {
        res.status(500).send('server error');
    }
});

module.exports = router;
