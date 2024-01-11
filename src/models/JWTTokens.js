const e = require('cors');
const {query} = require('../config/database');

// CREATE TABLE JWTTokensStudent
// (
//     TokenID INT PRIMARY KEY AUTO_INCREMENT,
//     Token   VARCHAR(255) NOT NULL,
//     RefreshToken VARCHAR(255) NOT NULL,
//     UserID  INT,
//     FOREIGN KEY (UserID) REFERENCES Customers (Student_ID)
// );

// CREATE TABLE JWTTokensLecturer
// (
//     TokenID INT PRIMARY KEY AUTO_INCREMENT,
//     Token   VARCHAR(255) NOT NULL,
//     RefreshToken VARCHAR(255) NOT NULL,
//     UserID  INT,
//     FOREIGN KEY (UserID) REFERENCES Customers (Lecturer_ID)
// );

// CREATE TABLE JWTTokensAdmin
// (
//     TokenID INT PRIMARY KEY AUTO_INCREMENT,
//     Token   VARCHAR(255) NOT NULL,
//     RefreshToken VARCHAR(255) NOT NULL,
//     UserID  INT,
//     FOREIGN KEY (UserID) REFERENCES Customers (Admin_ID)
// );

// CREATE TABLE JWTTokensAcademicStaff
// (
//     TokenID INT PRIMARY KEY AUTO_INCREMENT,
//     Token   VARCHAR(255) NOT NULL,
//     RefreshToken VARCHAR(255) NOT NULL,
//     UserID  INT,
//     FOREIGN KEY (UserID) REFERENCES Customers (Staff_ID)
// );

// CREATE TABLE JWTTokensNonAcademicStaff
// (
//     TokenID INT PRIMARY KEY AUTO_INCREMENT,
//     Token   VARCHAR(255) NOT NULL,
//     RefreshToken VARCHAR(255) NOT NULL,
//     UserID  INT,
//     FOREIGN KEY (UserID) REFERENCES Customers (Non_Academic_Staff_ID)
// );

const jwtModel = {
    pushTokenStudent: async (Token, RefreshToken, UserID) => {
        try{
            return await query('INSERT INTO JWTTokensStudent (Token, RefreshToken, UserID) VALUES (?, ?, ?)', [Token, RefreshToken, UserID]);
        } catch (error) {
            throw error;
        }
    },
    pushaddTokenLecturer: async (Token, RefreshToken, UserID) => {
        try{
            return await query('INSERT INTO JWTTokensLecturer (Token, RefreshToken, UserID) VALUES (?, ?, ?)', [Token, RefreshToken, UserID]);
        } catch (error) {
            throw error;
        }
    },
    pushTokenAdmin: async (Token, RefreshToken, UserID) => {
        try{
            return await query('INSERT INTO JWTTokensAdmin (Token, RefreshToken, UserID) VALUES (?, ?, ?)', [Token, RefreshToken, UserID]);
        } catch (error) {
            throw error;
        }
    },
    pushTokenAcademicStaff: async (Token, RefreshToken, UserID) => {
        try{
            return await query('INSERT INTO JWTTokensAcademicStaff (Token, RefreshToken, UserID) VALUES (?, ?, ?)', [Token, RefreshToken, UserID]);
        } catch (error) {
            throw error;
        }
    },
    pushTokenNonAcademicStaff: async (Token, RefreshToken, UserID) => {
        try{
            return await query('INSERT INTO JWTTokensNonAcademicStaff (Token, RefreshToken, UserID) VALUES (?, ?, ?)', [Token, RefreshToken, UserID]);
        } catch (error) {
            throw error;
        }
    },
    getTokenStudent: async (Token) => {
        try{
            return await query('SELECT * FROM JWTTokensStudent WHERE Token = ?', [Token]);
        } catch (error) {
            throw error;
        }
    },
    getTokenLecturer: async (Token) => {
        try{
            return await query('SELECT * FROM JWTTokensLecturer WHERE Token = ?', [Token]);
        } catch (error) {
            throw error;
        }
    },
    getTokenAdmin: async (Token) => {
        try{
            return await query('SELECT * FROM JWTTokensAdmin WHERE Token = ?', [Token]);
        } catch (error) {
            throw error;
        }
    },
    getTokenAcademicStaff: async (Token) => {
        try{
            return await query('SELECT * FROM JWTTokensAcademicStaff WHERE Token = ?', [Token]);
        } catch (error) {
            throw error;
        }
    },
    getTokenNonAcademicStaff: async (Token) => {
        try{
            return await query('SELECT * FROM JWTTokensNonAcademicStaff WHERE Token = ?', [Token]);
        } catch (error) {
            throw error;
        }
    },
    getTokenStudentByRefreshToken: async (RefreshToken, UserID) => {
        try{
            const results = 'SELECT * FROM JWTTokensStudent WHERE RefreshToken = '+RefreshToken+' AND UserID = '+UserID+';';
            console.log(results);
            return await query('SELECT * FROM JWTTokensStudent WHERE RefreshToken = ? AND UserID = ?', [RefreshToken, UserID]);
        }catch (error) {
            throw error;
        }
    },
    getTokenLecturerByRefreshToken: async (RefreshToken, UserID) => {
        try{
            return await query('SELECT * FROM JWTTokensLecturer WHERE RefreshToken = ? AND UserID = ?', [RefreshToken, UserID]);
        }catch (error) {
            throw error;
        }
    },
    getTokenAdminByRefreshToken: async (RefreshToken, UserID) => {
        try{
            return await query('SELECT * FROM JWTTokensAdmin WHERE RefreshToken = ? AND UserID = ?', [RefreshToken, UserID]);
        }catch (error) {
            throw error;
        }
    },
    getTokenAcademicStaffByRefreshToken: async (RefreshToken, UserID) => {
        try{
            return await query('SELECT * FROM JWTTokensAcademicStaff WHERE RefreshToken = ? AND UserID = ?', [RefreshToken, UserID]);
        }catch (error) {
            throw error;
        }
    },
    getTokenNonAcademicStaffByRefreshToken: async (RefreshToken, UserID) => {
        try{
            return await query('SELECT * FROM JWTTokensNonAcademicStaff WHERE RefreshToken = ? AND UserID = ?', [RefreshToken, UserID]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenStudent: async (Token) => {
        try{
            return await query('DELETE FROM JWTTokensStudent WHERE Token = ?', [Token]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenLecturer: async (Token) => {
        try{
            return await query('DELETE FROM JWTTokensLecturer WHERE Token = ?', [Token]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenAdmin: async (Token) => {
        try{
            return await query('DELETE FROM JWTTokensAdmin WHERE Token = ?', [Token]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenAcademicStaff: async (Token) => {
        try{
            return await query('DELETE FROM JWTTokensAcademicStaff WHERE Token = ?', [Token]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenNonAcademicStaff: async (Token) => {
        try{
            return await query('DELETE FROM JWTTokensNonAcademicStaff WHERE Token = ?', [Token]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenStudentByRefreshToken: async (UserID) => {
        try{
            return await query('DELETE FROM JWTTokensStudent WHERE UserID = ?', [UserID]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenLecturerByRefreshToken: async (UserID) => {
        try{
            return await query('DELETE FROM JWTTokensLecturer WHERE UserID = ?', [UserID]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenAdminByRefreshToken: async (UserID) => {
        try{
            return await query('DELETE FROM JWTTokensAdmin WHERE UserID = ?', [UserID]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenAcademicStaffByRefreshToken: async (UserID) => {
        try{
            return await query('DELETE FROM JWTTokensAcademicStaff WHERE UserID = ?', [UserID]);
        }catch (error) {
            throw error;
        }
    },
    deleteTokenNonAcademicStaffByRefreshToken: async (UserID) => {
        try{
            return await query('DELETE FROM JWTTokensNonAcademicStaff WHERE UserID = ?', [UserID]);
        }catch (error) {
            throw error;
        }
    }   
}

module.exports = jwtModel;