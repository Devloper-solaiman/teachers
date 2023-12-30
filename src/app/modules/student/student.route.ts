import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router()

router.get('/', studentControllers.getAllStudents);
router.get('/:studentId', studentControllers.getSingleStudent);
router.delete('/:studentId', studentControllers.DeleteStudent);


export const StudentRoutes = router;