import config from "../../config";
import { Student } from "../student/student.interface";
import { TStudent } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: Student) => {

    const userData: Partial<TUser> = {}
    userData.password = password || (config.default_pass as string)
    userData.role = 'student';
    userData.id = '2030100001'

    const newUser = await User.create(userData);

    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;

        const newStudent = await TStudent.create(studentData)
        return newStudent;
    }
}

export const UserServices = {
    createStudentIntoDB,
}