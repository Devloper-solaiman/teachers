import { z } from "zod";

// Define a schema for UserName
const userNameValidationSchema = z.object({
    firstName: z.string().max(20),
    middleName: z.string().optional(),
    lastName: z.string(),
});

// Define a schema for Guardian
const guardianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOcupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOcupation: z.string(),
    motherContactNo: z.string(),
});

// Define a schema for LocalGuardian
const localGuardianValidationSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

// Define the main schema for Student
const createStudentValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        student: z.object({
            name: userNameValidationSchema,
            gender: z.enum(["male", "female", "other"]),
            dateofBirth: z.string(),
            email: z.string().email(),
            contactNo: z.string(),
            emergencyContact: z.string(),
            bloodGroup: z.enum(["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"]),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            gurdian: guardianValidationSchema,
            localgurdian: localGuardianValidationSchema,
            profileimg: z.string(),
        })
    })
});

export const StudentZodSchema = {
    createStudentValidationSchema,

};
