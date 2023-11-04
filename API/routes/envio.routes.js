import { Router } from "express";
import EnvioService from "../services/envio.services.js";
import { limiterGet } from "../config/rateLimit.js";

const router = Router();

router
    .use(limiterGet())

    .post('/', EnvioService.registerEnvio)

    .get('/', EnvioService.getAllEnvios)

    .get('/:id', EnvioService.getEnvioById)

    .put('/:id', EnvioService.updateEnvio)

    .delete('/:id', EnvioService.deleteEnvio)

export default router;