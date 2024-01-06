// -- Table for Users
// CREATE TABLE Users (
//     UserID INT PRIMARY KEY,
//     UserName VARCHAR(50) NOT NULL,
//     UserType VARCHAR(20) NOT NULL CHECK (UserType IN ('Admin', 'Student', 'Lecturer', 'Academic Staff', 'Non Academic Staff'))
    
// );

const { query } = require('../config/database');

//User model is an object that contains functions to interact with the database
const UserModel = {
    getAllUsers: async () => {
        try{
            const results = await query('SELECT * FROM Users');
            return results;
        }catch(error){
            throw error;
        }
    },

//UserID, UserName, UserType
    addUser: async (UserID, UserName, UserType, Password) => {
        try {
            const results = await query('INSERT INTO Users (' +
                'UserID, UserName, UserType, Password) VALUES (?, ?, ?, ?)',
                [UserID, UserName, UserType, Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (UserID) => {
        try {
            const results = await query('SELECT * FROM Users WHERE UserID = ?', [UserID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getUserByName: async (UserName) => {
        try {
            const results = await query('SELECT * FROM Users WHERE UserName = ?', [UserName]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getUserByType: async (UserType) => {
        try {
            const results = await query('SELECT * FROM Users WHERE UserType = ?', [UserType]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getUserByEmail: async (UserEmail) => {
        try {
            const results = await query('SELECT * FROM Users WHERE UserEmail = ?', [UserEmail]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getUserByPassword: async (Password) => {
        try {
            const results = await query('SELECT * FROM Users WHERE Password = ?', [Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateUserById: async (UserID, Password) => {
        try {
            const results = await query('UPDATE Users SET Password = ? WHERE UserID = ?', [Password, UserID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteUserById: async (UserID) => {
        try {
            const results = await query('DELETE FROM Users WHERE UserID = ?', [UserID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

};

module.exports = UserModel;