import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";


const getAllStudents = catchAsync(async (req, res) => {
    const result = await studentServices.getAllStudentfromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'all student are successfully retrieved',
        data: result,
    })
})

const getSingleStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentfromDB(studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'single student geted successfully',
        data: result,
    })
})
const DeleteStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await studentServices.DeleteStudentfromDB(studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user data is deleted successfully 🚚📩',
        data: result,
    })
})
export const studentControllers = {
    getAllStudents,
    getSingleStudent,
    DeleteStudent,
}