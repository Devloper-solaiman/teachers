import { TStudent } from "./student.model";


const getAllStudentfromDB = async () => {
    const result = await TStudent.find();
    return result;
}
const getSingleStudentfromDB = async (id: string) => {
    // const result = await TStudent.findOne({ id });
    const result = await TStudent.aggregate([{ $match: { id: id } }])
    return result;
}
const DeleteStudentfromDB = async (id: string) => {
    const result = await TStudent.updateOne({ id }, { isDeleted: true })
    return result;
}

export const studentServices = {
    getAllStudentfromDB,
    getSingleStudentfromDB,
    DeleteStudentfromDB,
}