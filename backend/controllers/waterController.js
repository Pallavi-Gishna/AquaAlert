const WaterModel = require('../models/WaterModel');

// Fetch all records
exports.getAllRecords = async (req, res) => {
    try {
        const records = await WaterModel.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add a new record
exports.addRecord = async (req, res) => {
    try {
        const { userId, consumption, date } = req.body;

        const newRecord = new WaterModel({
            userId,
            consumption,
            date,
        });

        await newRecord.save();
        res.status(201).json({ message: 'Record added successfully', newRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error adding record', error });
    }
};

// Fetch trends (dummy implementation for now)
exports.getTrends = async (req, res) => {
    try {
        // Replace with actual logic
        res.status(200).json({ message: 'Trends endpoint is under development' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
