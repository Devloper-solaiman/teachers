import { TAcademicSemseterCode, TAcademicSemseterName, TAcademicSemseterNameCodeMapper, TMonths } from "./academicSemester.interface"

export const months: TMonths[] = [
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
    "December"
]

export const academicSemesterName: TAcademicSemseterName[] = ['Autumn', 'summer', 'Fall']
export const academicSemesterCode: TAcademicSemseterCode[] = ['01', '02', '03']

export const academicSemesterNameCodeMapper: TAcademicSemseterNameCodeMapper = {
    Autumn: '01',
    summar: '02',
    fall: '03'
}
