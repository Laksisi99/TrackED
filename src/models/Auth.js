const { query } = require('../config/database');

const authModel = {
    authAdmin: async (Admin_Email, Admin_Password) => {
        try {
            return await query('SELECT * FROM Admin WHERE Admin_Email = ? AND Admin_Password = ?', [Admin_Email, Admin_Password]);
        } catch (error) {
            throw error;
        }
    },
    authStudent: async (Student_Email, Password) => {
        try {
            return await query('SELECT * FROM Students WHERE Student_Email = ? AND Password = ?', [Student_Email, Password]);
        } catch (error) {
            throw error;
        }
    },
    authLecturer: async (Lecturer_Email, Password) => {
        try {
            return await query('SELECT * FROM Lecturers WHERE Lecturer_Email = ? AND Password = ?', [Lecturer_Email, Password]);
        } catch (error) {
            throw error;
        }
    },
    authAcademicStaff: async (Staff_Email, Password) => {
        try {
            return await query('SELECT * FROM Academic_Staff WHERE Staff_Email = ? AND Password = ?', [Staff_Email, Password]);
        } catch (error) {
            throw error;
        }
    },
    authNonAcademicStaff: async (Non_Academic_Staff_Email, Password) => {
        try {
            return await query('SELECT * FROM Non_Academic_Staff WHERE Non_Academic_Staff_Email = ? AND Password = ?', [Non_Academic_Staff_Email, Password]);
        } catch (error) {
            throw error;
        }
    },
}

module.exports = authModel;
