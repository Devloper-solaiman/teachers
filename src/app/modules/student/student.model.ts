/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { Gurdian, Student, StudentModel, UserName, localGuardian } from "./student.interface";

const studentNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const guardianSchema = new Schema<Gurdian>({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOcupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true,
    }
})
const localGuardianSchema = new Schema<localGuardian>({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})
const StudentSchema = new Schema<Student, StudentModel>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User is is required'],
        unique: true,
        ref: 'User',
    },
    name: {
        type: studentNameSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    dateofBirth: { type: String },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gurdian: {
        type: guardianSchema,
        required: true
    },
    localgurdian: {
        type: localGuardianSchema,
        required: true
    },
    profileimg: { type: String },
    admissionSemester: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicSemester',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    {
        toJSON: {
            virtuals: true
        }
    }
);


StudentSchema.virtual('fullName').get(function () {
    return this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName
})

StudentSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
StudentSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
StudentSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});

StudentSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await TStudent.findOne({ id })
    return existingUser
}


export const TStudent = model<Student, StudentModel>('Student', StudentSchema);