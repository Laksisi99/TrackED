const { query } = require('../config/database');

//Batch model is an object that contains functions to interact with the database
const BatchModel = {
    getAllBatches: async () => {
        try{
            const results = await query('SELECT * FROM Batches');
            return results;
        }catch(error){
            throw error;
        }
    },

//Batch_ID, Batch_Start_Year, Batch_End_Year, Batch_Name, Batch_Code
    addBatch: async (Batch_ID, Batch_Start_Year, Batch_End_Year, Batch_Code, Batch_Name) => {
        try {
            const results = await query('INSERT INTO Batches (' +
                'Batch_ID, Batch_Start_Year, Batch_End_Year, Batch_Code, Batch_Name) VALUES (?, ?, ?, ?, ?)',
                [Batch_ID, Batch_Start_Year, Batch_End_Year, Batch_Code, Batch_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getBatchById: async (Batch_ID) => {
        try {
            const results = await query('SELECT * FROM Batches WHERE Batch_ID = ?', [Batch_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getBatchByName: async (Batch_Name) => {
        try {
            const results = await query('SELECT * FROM Batches WHERE Batch_Name = ?', [Batch_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getBatchByCode: async (Batch_Code) => {
        try {
            const results = await query('SELECT * FROM Batches WHERE Batch_Code = ?', [Batch_Code]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getBatchByStartYear: async (Batch_Start_Year) => {
        try {
            const results = await query('SELECT * FROM Batches WHERE Batch_Start_Year = ?', [Batch_Start_Year]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getBatchByEndYear: async (Batch_End_Year) => {
        try {
            const results = await query('SELECT * FROM Batches WHERE Batch_End_Year = ?', [Batch_End_Year]);
            return results;
        } catch (error) {
            throw error;
        }
    },
   
};

module.exports = BatchModel;