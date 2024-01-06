// -- Table for Students
// CREATE TABLE Students (
//     Student_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Student_Name VARCHAR(50) NOT NULL,
//     Student_Reg_Num VARCHAR(20) UNIQUE NOT NULL,
//     Student_Email VARCHAR(100) UNIQUE NOT NULL,
//     Student_Contact_Number VARCHAR(15),
//     Batch_ID INT,
//     FOREIGN KEY (Batch_ID) REFERENCES Batches(Batch_ID)
// );

const { query } = require('../config/database');

//Student model is an object that contains functions to interact with the database
const StudentModel = {
    getAllStudents: async () => {
        try{
            const results = await query('SELECT * FROM Students');
            return results;
        }catch(error){
            throw error;
        }
    },

//Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID
    addStudent: async (Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID) => {
        try {
            const results = await query('INSERT INTO Students (' +
                'Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID) VALUES (?, ?, ?, ?, ?, ?)',
                [Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentById: async (Student_ID) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Student_ID = ?', [Student_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentByName: async (Student_Name) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Student_Name = ?', [Student_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentByRegNum: async (Student_Reg_Num) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Student_Reg_Num = ?', [Student_Reg_Num]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentByEmail: async (Student_Email) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Student_Email = ?', [Student_Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentByContactNumber: async (Student_Contact_Number) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Student_Contact_Number = ?', [Student_Contact_Number]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudentByBatchId: async (Batch_ID) => {
        try {
            const results = await query('SELECT * FROM Students WHERE Batch_ID = ?', [Batch_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateStudent: async (Student_ID, Student_Contact_Number, Batch_ID) => {
        try {
            const results = await query('UPDATE Students SET Student_Contact_Number = ?, Batch_ID = ? WHERE Student_ID = ?', [Student_Contact_Number, Batch_ID, Student_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },


    deleteStudentById: async (Student_ID) => {
        try {
            const results = await query('DELETE FROM Students WHERE Student_ID = ?', [Student_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = StudentModel;