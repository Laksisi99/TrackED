// -- Table for Academic Staff
// CREATE TABLE Academic_Staff (
//     Staff_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Staff_Name VARCHAR(50) NOT NULL,
//     Staff_Email VARCHAR(100) UNIQUE NOT NULL,
//     Staff_Contact_Number VARCHAR(15),
//     NIC VARCHAR(15) UNIQUE NOT NULL
// );

const { query } = require('../config/database');

//Academic_Staff model is an object that contains functions to interact with the database
const Academic_StaffModel = {
    getAllAcademic_Staffs: async () => {
        try{
            const results = await query('SELECT * FROM Academic_Staff');
            return results;
        }catch(error){
            throw error;
        }
    },

//Staff_ID, Staff_Name, Staff_Email, Staff_Contact_Number, NIC
    addAcademic_Staff: async (Staff_ID, Staff_Name, Staff_Email, Staff_Contact_Number, NIC, Password) => {
        try {
            const results = await query('INSERT INTO Academic_Staff (' +
                'Staff_ID, Staff_Name, Staff_Email, Staff_Contact_Number, NIC, Password) VALUES (?, ?, ?, ?, ?, ?)',
                [Staff_ID, Staff_Name, Staff_Email, Staff_Contact_Number, NIC, Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAcademic_StaffById: async (Staff_ID) => {
        try {
            const results = await query('SELECT * FROM Academic_Staff WHERE Staff_ID = ?', [Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAcademic_StaffByName: async (Staff_Name) => {
        try {
            const results = await query('SELECT * FROM Academic_Staff WHERE Staff_Name = ?', [Staff_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAcademic_StaffByEmail: async (Staff_Email) => {
        try {
            const results = await query('SELECT * FROM Academic_Staff WHERE Staff_Email = ?', [Staff_Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAcademic_StaffByContactNumber: async (Staff_Contact_Number) => {
        try {
            const results = await query('SELECT * FROM Academic_Staff WHERE Staff_Contact_Number = ?', [Staff_Contact_Number]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAcademic_StaffByNIC: async (NIC) => {
        try {
            const results = await query('SELECT * FROM Academic_Staff WHERE NIC = ?', [NIC]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateAcademic_StaffById: async (Staff_ID, Staff_Contact_Number, Password) => {
        try {
            const results = await query('UPDATE Academic_Staff SET Staff_Contact_Number = ?, Password = ? WHERE Staff_ID = ?',
                [Staff_Contact_Number, Password, Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteAcademic_StaffById: async (Staff_ID) => {
        try {
            const results = await query('DELETE FROM Academic_Staff WHERE Staff_ID = ?', [Staff_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

};

module.exports = Academic_StaffModel;