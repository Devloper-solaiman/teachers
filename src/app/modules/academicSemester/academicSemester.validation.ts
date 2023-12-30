import { Schema } from "mongoose";
import { TAcademicSemseter, TAcademicSemseterCode, TAcademicSemseterName, TMonths } from "./academicSemester.interface";

const Monts: TMonths[] = [
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

const AcademicSemseterName: TAcademicSemseterName[] = ['Autumn', 'summer', 'Fall'];
const AcademicSemsetercode: TAcademicSemseterCode[] = ['01', '02', '03'];
const academicSemesterSchema = new Schema<TAcademicSemseter>({
    name: {
        type: String,
        required: true,
        enum: AcademicSemseterName
    },
    year: {
        type: Date,
        required: true,
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemsetercode
    },
    startMonth: {
        type: String,
        required: true,
        enum: Monts
    },
    endMonth: {
        type: String,
        required: true,
        enum: Monts
    },
})