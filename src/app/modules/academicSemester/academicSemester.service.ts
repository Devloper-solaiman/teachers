import { academicSemesterNameCodeMapper } from "./academicSemester.constent"
import { TAcademicSemseter } from "./academicSemester.interface"
import { AcademicSemester } from "./academicSemester.model"


const createAcademicSemesterIntoDB = async (payload: TAcademicSemseter) => {

    if (academicSemesterNameCodeMapper[payload.name] === payload.code) {
        throw new Error('somthing went wrong  Invalid semester code')
    }
    const result = await AcademicSemester.create(payload)
    return result;
}
const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id)
    return result;
}
const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemseter>,
) => {
    if (payload.name &&
        payload.code &&
        academicSemesterNameCodeMapper[payload.name] === payload.code
    ) {
        throw new Error('Invalid semester Code')
    }
    const result = await AcademicSemester.findOneAndUpdate(
        { _id: id }, payload, { new: true }
    )
    return result
}

const getAllAcademicSemesterfromDB = async () => {
    const result = await AcademicSemester.find()
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB,
    getAllAcademicSemesterfromDB,
}