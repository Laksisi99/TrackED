// -- Table for Clubs
// CREATE TABLE Clubs (
//     Club_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Club_Name VARCHAR(100) NOT NULL,
//     Club_Code VARCHAR(20) UNIQUE NOT NULL
// );

const { query } = require('../config/database');

//Club model is an object that contains functions to interact with the database

const ClubModel = {
    getAllClubs: async () => {
        try{
            const results = await query('SELECT * FROM Clubs');
            return results;
        }catch(error){
            throw error;
        }
    },

//Club_ID, Club_Name, Club_Code
    addClub: async (Club_ID, Club_Name, Club_Code) => {
        try {
            const results = await query('INSERT INTO Clubs (' +
                'Club_ID, Club_Name, Club_Code) VALUES (?, ?, ?)',
                [Club_ID, Club_Name, Club_Code]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getClubById: async (Club_ID) => {
        try {
            const results = await query('SELECT * FROM Clubs WHERE Club_ID = ?', [Club_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getClubByName: async (Club_Name) => {
        try {
            const results = await query('SELECT * FROM Clubs WHERE Club_Name = ?', [Club_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getClubByCode: async (Club_Code) => {
        try {
            const results = await query('SELECT * FROM Clubs WHERE Club_Code = ?', [Club_Code]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateClub: async (Club_ID, Club_Name, Club_Code) => {
        try {
            const results = await query('UPDATE Clubs SET Club_Name = ?, Club_Code = ? WHERE Club_ID = ?',
                [Club_Name, Club_Code, Club_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteClub: async (Club_ID) => {
        try {
            const results = await query('DELETE FROM Clubs WHERE Club_ID = ?', [Club_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = ClubModel;