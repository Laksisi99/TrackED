// -- Table for Courses
// CREATE TABLE Courses (
//     Course_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Course_Name VARCHAR(100) NOT NULL,
//     Course_Code VARCHAR(20) UNIQUE NOT NULL,
//     Lecturer_ID INT,
//     FOREIGN KEY (Lecturer_ID) REFERENCES Lecturers(Lecturer_ID)
// );

const { query } = require('../config/database');

//Course model is an object that contains functions to interact with the database

const CourseModel = {
    getAllCourses: async () => {
        try{
            const results = await query('SELECT * FROM Courses');
            return results;
        }catch(error){
            throw error;
        }
    },

//Course_ID, Course_Name, Course_Code, Lecturer_ID
    addCourse: async (Course_ID, Course_Name, Course_Code, Lecturer_ID) => {
        try {
            const results = await query('INSERT INTO Courses (' +
                'Course_ID, Course_Name, Course_Code, Lecturer_ID) VALUES (?, ?, ?, ?)',
                [Course_ID, Course_Name, Course_Code, Lecturer_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getCourseById: async (Course_ID) => {
        try {
            const results = await query('SELECT * FROM Courses WHERE Course_ID = ?', [Course_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getCourseByName: async (Course_Name) => {
        try {
            const results = await query('SELECT * FROM Courses WHERE Course_Name = ?', [Course_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getCourseByCode: async (Course_Code) => {
        try {
            const results = await query('SELECT * FROM Courses WHERE Course_Code = ?', [Course_Code]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getCourseByLecturerId: async (Lecturer_ID) => {
        try {
            const results = await query('SELECT * FROM Courses WHERE Lecturer_ID = ?', [Lecturer_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getCourseByLecturerName: async (Lecturer_Name) => {
        try {
            const results = await query('SELECT * FROM Courses WHERE Lecturer_Name = ?', [Lecturer_Name]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateCourse: async (Course_ID, Lecturer_ID) => {
        try {
            const results = await query('UPDATE Courses SET Lecturer_ID = ? WHERE Course_ID = ?',
                [Lecturer_ID, Course_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteCourse: async (Course_ID) => {
        try {
            const results = await query('DELETE FROM Courses WHERE Course_ID = ?', [Course_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

};

module.exports = CourseModel;
