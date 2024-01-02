import { Schema, model } from "mongoose"
import { TAcademicSemseter } from "./academicSemester.interface"
import { academicSemesterCode, academicSemesterName, months } from "./academicSemester.constent"

const academicSemseterSchema = new Schema<TAcademicSemseter>(
    {
        name: {
            type: String,
            required: true,
            enum: academicSemesterName
        },
        year: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: academicSemesterCode
        },
        startMonth: {
            type: String,
            enum: months
        },
        endMonth: {
            type: String,
            enum: months
        }
    },
    {
        timestamps: true,
    },
)

academicSemseterSchema.pre('save', async function (next) {
    const isSemesterExists = await AcademicSemester.findOne({
        year: this.year,
        name: this.name,
    })
    if (isSemesterExists) {
        throw new Error('semester already exists !!!')
    }
    next()
})


export const AcademicSemester = model<TAcademicSemseter>(
    'AcademicSemester', academicSemseterSchema,
)