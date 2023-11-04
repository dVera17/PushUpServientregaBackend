import { Router } from "express";
import UserService from "../services/user.services.js";
import { limiterGet } from "../config/rateLimit.js";

const router = Router();

router
    .use(limiterGet())

    .post('/', UserService.registerUser)

    .get('/', UserService.getAllUsers)

    .get('/:dni', UserService.getUserById)

    .put('/:dni', UserService.updateUser)

    .delete('/:dni', UserService.deleteUser);

export default router;