import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { Student } from "../student/student.interface";
import { TStudent } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: Student) => {

    const userData: Partial<TUser> = {}
    userData.password = password || (config.default_pass as string)
    userData.role = 'student';


    const admissionSemester = await AcademicSemester.findById(
        payload.admissionSemester)


    userData.id = await generateStudentId(admissionSemester)

    const newUser = await User.create(userData);

    if (Object.keys(newUser).length) {
        payload.id = newUser.id;
        payload.user = newUser._id;

        const newStudent = await TStudent.create(payload)
        return newStudent;
    }
}

export const UserServices = {
    createStudentIntoDB,
}