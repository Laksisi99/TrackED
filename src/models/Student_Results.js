// -- Table for Student Results
// CREATE TABLE Student_Results (
//     Result_ID INT PRIMARY KEY AUTO_INCREMENT,
//     Student_ID INT,
//     Course_ID INT,
//     Assignment_Marks DECIMAL(5,2),
//     Mid_Exam_Marks DECIMAL(5,2),
//     End_Exam_Marks DECIMAL(5,2),
//     Overall_Marks DECIMAL(5,2),
//     Grade VARCHAR(2),
//     Semester_ID INT,
//     FOREIGN KEY (Student_ID) REFERENCES Students(Student_ID),
//     FOREIGN KEY (Course_ID) REFERENCES Courses(Course_ID),
//     FOREIGN KEY (Semester_ID) REFERENCES Semester_Details(Semester_ID)
// );

const { query } = require('../config/database');

//Student_Results model is an object that contains functions to interact with the database

const Student_ResultsModel = {
    getAllStudent_Results: async () => {
        try{
            const results = await query('SELECT * FROM Student_Results');
            return results;
        }catch(error){
            throw error;
        }
    },

//Result_ID, Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID
    addStudent_Results: async (Result_ID, Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID) => {
        try {
            const results = await query('INSERT INTO Student_Results (' +
                'Result_ID, Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [Result_ID, Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudent_ResultsById: async (Result_ID) => {
        try {
            const results = await query('SELECT * FROM Student_Results WHERE Result_ID = ?', [Result_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudent_ResultsByStudentID: async (Student_ID) => {
        try {
            const results = await query('SELECT * FROM Student_Results WHERE Student_ID = ?', [Student_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudent_ResultsByCourseID: async (Course_ID) => {
        try {
            const results = await query('SELECT * FROM Student_Results WHERE Course_ID = ?', [Course_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudent_ResultsBySemesterID: async (Semester_ID) => {
        try {
            const results = await query('SELECT * FROM Student_Results WHERE Semester_ID = ?', [Semester_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getStudent_ResultsByGrade: async (Grade) => {
        try {
            const results = await query('SELECT * FROM Student_Results WHERE Grade = ?', [Grade]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    updateStudent_Results: async (Result_ID, Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID) => {
        try {
            const results = await query('UPDATE Student_Results SET Student_ID = ?, Course_ID = ?, Assignment_Marks = ?, Mid_Exam_Marks = ?, End_Exam_Marks = ?, Overall_Marks = ?, Grade = ?, Semester_ID = ? WHERE Result_ID = ?',
                [Student_ID, Course_ID, Assignment_Marks, Mid_Exam_Marks, End_Exam_Marks, Overall_Marks, Grade, Semester_ID, Result_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deleteStudent_Results: async (Result_ID) => {
        try {
            const results = await query('DELETE FROM Student_Results WHERE Result_ID = ?', [Result_ID]);
            return results;
        } catch (error) {
            throw error;
        }
    },

};

module.exports = Student_ResultsModel;