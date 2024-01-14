const StudentModel = require('../models/Student');
const { successResponse, errorResponse } = require('../utils/responseUtils');
const {hashPassword} = require('../utils/bcrypt');

const studentService = {
    sampleEndPoint: async (req, res) => {
        const receivedData = req.body;
        console.log('Received data: ', receivedData);
        res.status(200).json({message: 'Data received successfully', data: receivedData});
    },

    getAllStudents: async (req, res) => {
        try {
            const results = await StudentModel.getAllStudents();
            if(results.length === 0) return errorResponse(res, 'No students found', 404);
            successResponse(res, 'Students retrieved successfully', results)
        } catch (error) {
            console.error('Error getting students:', error);
            errorResponse(res, 'Error Occurred while fetching students : '+error);
        }
    },

    getStudentByEmail: async (req, res) => {
        const {Student_Email} = req.params;
        try {
            const results = await StudentModel.getStudentByEmail(Student_Email);
            if(results.length === 0) return errorResponse(res, 'Student not found', 404);
            successResponse(res, 'Student retrieved successfully', results)
        } catch (error) {
            console.error('Error getting student by email:', error);
            errorResponse(res, 'Error Occurred while fetching student by email : '+error);
        }
    },

    getStudentById: async (req, res) => {
        const {Student_ID} = req.params;
        try {
            const results = await StudentModel.getStudentById(Student_ID);
            if(results.length === 0) return errorResponse(res, 'Student not found', 404);
            successResponse(res, 'Student retrieved successfully', results)
        } catch (error) {
            console.error('Error getting student by id:', error);
            errorResponse(res, 'Error Occurred while fetching student by id : '+error);
        }
    },

    addStudent: async (req, res) => {
        const { Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID, Password } = req.body;
        console.log(Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID, Password);
        if (!Student_Name || !Student_Reg_Num || !Student_Email || !Student_Contact_Number || !Batch_ID || !Password) {
            return errorResponse(res, 'Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID and Password are required fields', 400);
        }
        let affectedStudent;
        try {
            const emailResults = await StudentModel.getStudentByEmail(Student_Email);
            const regNumResults = await StudentModel.getStudentByRegNum(Student_Reg_Num);

            if (emailResults.length !== 0)
                return errorResponse(res, 'Student with this email already exists', 400);
            if (regNumResults.length !== 0)
                return errorResponse(res, 'Student with this registration number already exists', 400);

            const Student_ID = Math.floor(Math.random() * 1000000000);
            const hashedPassword = await hashPassword(Password);
            const result = await StudentModel.addStudent(Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID, hashedPassword);

            if (result.affectedRows === 0)
                return errorResponse(res, 'Error adding student', 500);
            else if (result.affectedRows === 1)
                affectedStudent = await StudentModel.getStudentById(Student_ID);
            return successResponse(res, 'Student added successfully', affectedStudent[0]);

        } catch (error) {
            console.error('Error adding student:', error);
            errorResponse(res, 'Error Occurred while adding student : ' + error);
        }
    },

    updateStudent: async (req, res) => {
        const {Student_ID} = req.params;
        const {
            Student_Name,
            Student_Reg_Num,
            Student_Email,
            Student_Contact_Number,
            Batch_ID,
            Password
        } = req.body;
        try {
            const result = await StudentModel.updateStudent(Student_ID, Student_Name, Student_Reg_Num, Student_Email, Student_Contact_Number, Batch_ID, Password);
            successResponse(res, 'Student updated successfully', result);
        } catch (error) {
            console.error('Error updating student:', error);
            errorResponse(res, 'Error Occurred while updating student : ' + error);
        }
    },

    deleteStudent: async (req, res) => {
        const {Student_ID} = req.params;
        try {
            await StudentModel.deleteStudent(Student_ID);
            successResponse(res, 'Student deleted successfully', null);
        } catch (error) {
            console.error('Error deleting student:', error);
            errorResponse(res, 'Error Occurred while deleting student : ' + error);
        }
    }
    
};

module.exports = studentService;