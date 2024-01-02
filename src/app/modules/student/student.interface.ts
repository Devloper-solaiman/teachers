/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type Gurdian = {
    fatherName: string;
    fatherOcupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOcupation: string;
    motherContactNo: string;
}
export type UserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
}
export type localGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}
export type Student = {
    id: string;
    user: Types.ObjectId;
    password: string;
    name: UserName;
    gender: "male" | "female" | "other";
    dateofBirth?: string;
    email: string;
    contactNo: string;
    emergencyContact: string;
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    gurdian: Gurdian;
    localgurdian: localGuardian;
    profileimg?: string;
    admissionSemester: Types.ObjectId;
    isDeleted: boolean;
}
// for creating static
export interface StudentModel extends Model<Student> {
    isUserExists(id: string): Promise<Student | null>
}


// for creating Instance

// export type StudentMethods = {
//     isUserExits(id: string): Promise<Student | null>;
// }
// export type StudentModel = Model<Student, Record<string, never>, StudentMethods>;