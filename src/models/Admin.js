// -- Table for Admin
// CREATE TABLE Admin (
//     Admin_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Admin_Name VARCHAR(50) NOT NULL,
//     Admin_Email VARCHAR(100) UNIQUE NOT NULL,
//     Admin_Password VARCHAR(100) NOT NULL
// );

const { query } = require('../config/database');

//Admin model is an object that contains functions to interact with the database
const AdminModel = {
    getAllAdmins: async () => {
        try{
            const results = await query('SELECT * FROM Admin');
            return results;
        }catch(error){
            throw error;
        }
    },

//Admin_ID, Admin_Name, Admin_Email, Admin_Password
    addAdmin: async (Admin_ID, Admin_Name, Admin_Email, Admin_Password) => {
        try {
            const results = await query('INSERT INTO Admin (' +
                'Admin_ID, Admin_Name, Admin_Email, Admin_Password) VALUES (?, ?, ?, ?)',
                [Admin_ID, Admin_Name, Admin_Email, Admin_Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAdminById: async (Admin_ID) => {
        try {
            const results = await query('SELECT * FROM Admin WHERE Admin_ID = ?', [Admin_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAdminByName: async (Admin_Name) => {
        try {
            const results = await query('SELECT * FROM Admin WHERE Admin_Name = ?', [Admin_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAdminByEmail: async (Admin_Email) => {
        try {
            const results = await query('SELECT * FROM Admin WHERE Admin_Email = ?', [Admin_Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAdminByPassword: async (Admin_Password) => {
        try {
            const results = await query('SELECT * FROM Admin WHERE Admin_Password = ?', [Admin_Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteAdminById: async (Admin_ID) => {
        try {
            const results = await query('DELETE FROM Admin WHERE Admin_ID = ?', [Admin_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateAdmin: async (Admin_ID, Admin_Email, Admin_Password) => {
        try {
            const results = await query('UPDATE Admin SET Admin_Email = ?, Admin_Password = ? WHERE Admin_ID = ?', [Admin_Name, Admin_Email, Admin_Password, Admin_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

}

module.exports = AdminModel;

