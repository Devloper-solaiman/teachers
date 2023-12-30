import { Schema, model } from "mongoose";
import { TMonths, TAcademicSemseter } from "./academicSemester.interface";


const monts: TMonths[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const acdemicSemesterSchema = new Schema<TAcademicSemseter>({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: monts
    },
    endMonth: {
        type: String,
        enum: monts
    },
},
    {
        timestamps: true,
    },
);

export const AcademicSemester = model<TAcademicSemseter>('AcademicSemester', acdemicSemesterSchema)