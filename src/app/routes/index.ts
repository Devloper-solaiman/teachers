import { Router } from "express"
import { userRouter } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";

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
]
moduleRoutes.forEach((route) => { router.use(route.path, route.route) })


export default router;