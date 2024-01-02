import { Router } from "express"
import { userRouter } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.rout";

const router = Router();

// route.use('/users', userRouter);
// route.use('/student', StudentRoutes);

const moduleRoutes = [
    {
        path: '/users',
        route: userRouter
    },
    {
        path: '/student',
        route: StudentRoutes,
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes,
    },
]
moduleRoutes.forEach((route) => { router.use(route.path, route.route) })


export default router;