// -- Table for Lecturers
// CREATE TABLE Lecturers (
//     Lecturer_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Lecturer_Name VARCHAR(50) NOT NULL,
//     Lecturer_Email VARCHAR(100) UNIQUE NOT NULL,
//     Lecturer_Contact_Number VARCHAR(15),
//     NIC VARCHAR(15) UNIQUE NOT NULL
// );

const { query } = require('../config/database');

//Lecturer model is an object that contains functions to interact with the database
const LecturerModel = {
    getAllLecturers: async () => {
        try{
            const results = await query('SELECT * FROM Lecturers');
            return results;
        }catch(error){
            throw error;
        }
    },

//Lecturer_ID, Lecturer_Name, Lecturer_Email, Lecturer_Contact_Number, NIC
    addLecturer: async (Lecturer_ID, Lecturer_Name, Lecturer_Email, Lecturer_Contact_Number, NIC, Password) => {
        try {
            const results = await query('INSERT INTO Lecturers (' +
                'Lecturer_ID, Lecturer_Name, Lecturer_Email, Lecturer_Contact_Number, NIC, Password) VALUES (?, ?, ?, ?, ?, ?)',
                [Lecturer_ID, Lecturer_Name, Lecturer_Email, Lecturer_Contact_Number, NIC, Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getLecturerById: async (Lecturer_ID) => {
        try {
            const results = await query('SELECT * FROM Lecturers WHERE Lecturer_ID = ?', [Lecturer_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getLecturerByName: async (Lecturer_Name) => {
        try {
            const results = await query('SELECT * FROM Lecturers WHERE Lecturer_Name = ?', [Lecturer_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getLecturerByEmail: async (Lecturer_Email) => {
        try {
            const results = await query('SELECT * FROM Lecturers WHERE Lecturer_Email = ?', [Lecturer_Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getLecturerByNIC: async (NIC) => {
        try {
            const results = await query('SELECT * FROM Lecturers WHERE NIC = ?', [NIC]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateLecturerById: async (Lecturer_ID, Lecturer_Contact_Number, Password) => {
        try {
            const results = await query('UPDATE Lecturers SET Lecturer_Contact_Number = ?, Password = ? WHERE Lecturer_ID = ?',
                [Lecturer_Contact_Number, Password, Lecturer_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteLecturerById: async (Lecturer_ID) => {
        try {
            const results = await query('DELETE FROM Lecturers WHERE Lecturer_ID = ?', [Lecturer_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = LecturerModel;