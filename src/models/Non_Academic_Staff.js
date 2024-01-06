// -- Table for Non Academic Staff
// CREATE TABLE Non_Academic_Staff (
//     Non_Academic_Staff_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Non_Academic_Staff_Name VARCHAR(50) NOT NULL,
//     Non_Academic_Staff_Email VARCHAR(100) UNIQUE NOT NULL,
//     Non_Academic_Staff_Contact_Number VARCHAR(15),
//     NIC VARCHAR(15) UNIQUE NOT NULL,
//     Club_ID INT,
//     FOREIGN KEY (Club_ID) REFERENCES Clubs(Club_ID)
// );

const { query } = require('../config/database');

//Non_Academic_Staff model is an object that contains functions to interact with the database
const Non_Academic_StaffModel = {
    getAllNon_Academic_Staff: async () => {
        try{
            const results = await query('SELECT * FROM Non_Academic_Staff');
            return results;
        }catch(error){
            throw error;
        }
    },

//Non_Academic_Staff_ID, Non_Academic_Staff_Name, Non_Academic_Staff_Email, Non_Academic_Staff_Contact_Number, NIC, Club_ID
    addNon_Academic_Staff: async (Non_Academic_Staff_ID, Non_Academic_Staff_Name, Non_Academic_Staff_Email, Non_Academic_Staff_Contact_Number, NIC, Club_ID, Password) => {
        try {
            const results = await query('INSERT INTO Non_Academic_Staff (' +
                'Non_Academic_Staff_ID, Non_Academic_Staff_Name, Non_Academic_Staff_Email, Non_Academic_Staff_Contact_Number, NIC, Club_ID, Password) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [Non_Academic_Staff_ID, Non_Academic_Staff_Name, Non_Academic_Staff_Email, Non_Academic_Staff_Contact_Number, NIC, Club_ID, Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getNon_Academic_StaffById: async (Non_Academic_Staff_ID) => {
        try {
            const results = await query('SELECT * FROM Non_Academic_Staff WHERE Non_Academic_Staff_ID = ?', [Non_Academic_Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getNon_Academic_StaffByName: async (Non_Academic_Staff_Name) => {
        try {
            const results = await query('SELECT * FROM Non_Academic_Staff WHERE Non_Academic_Staff_Name = ?', [Non_Academic_Staff_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getNon_Academic_StaffByEmail: async (Non_Academic_Staff_Email) => {
        try {
            const results = await query('SELECT * FROM Non_Academic_Staff WHERE Non_Academic_Staff_Email = ?', [Non_Academic_Staff_Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getNon_Academic_StaffByClubId: async (Club_ID) => {
        try {
            const results = await query('SELECT * FROM Non_Academic_Staff WHERE Club_ID = ?', [Club_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getNon_Academic_StaffByNIC: async (NIC) => {
        try {
            const results = await query('SELECT * FROM Non_Academic_Staff WHERE NIC = ?', [NIC]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateNon_Academic_StaffById: async (Non_Academic_Staff_ID, Non_Academic_Staff_Contact_Number, Club_ID, Password) => {
        try {
            const results = await query('UPDATE Non_Academic_Staff SET Non_Academic_Staff_Contact_Number = ?, Club_ID = ? ,Password = ? WHERE Non_Academic_Staff_ID = ?',
                [Non_Academic_Staff_Contact_Number, Club_ID, Password, Non_Academic_Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteNon_Academic_StaffById: async (Non_Academic_Staff_ID) => {
        try {
            const results = await query('DELETE FROM Non_Academic_Staff WHERE Non_Academic_Staff_ID = ?', [Non_Academic_Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

};

module.exports = Non_Academic_StaffModel;