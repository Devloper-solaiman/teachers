import express from 'express'
import { UserControllers } from './user.controller';
import validateRequest from '../../midlewere/validaterequest';
import { StudentZodSchema } from '../student/student.validation';
const router = express.Router();


router.post('/create-user', validateRequest(StudentZodSchema.createStudentValidationSchema), UserControllers.createStudent)

export const userRouter = router;