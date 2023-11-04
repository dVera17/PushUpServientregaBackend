import { envioSchema } from "../Dtos/schemas.js";
import Connect from "../db/Connect.js";

const db = Connect.getInstance().conn();
const envio = db.collection('envio');

export default class EnvioService {
    static async registerEnvio(req, res) {
        try {
            const validacion = envioSchema.safeParse(req.body);
            if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`) });

            let result = await envio.insertOne(req.body);
            if (!result) return res.status(401).json({ status: 401, message: "Ups, ha ocurrido un problema!" })
            res.status(200).json({ status: 200, message: "Usuario agregado con exito" })
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" })
        }
    }

    static async getAllEnvios(req, res) {
        try {
            let result = await envio.find({}).toArray();
            res.status(200).json({ status: 200, data: result });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async getEnvioById(req, res) {
        try {
            let result = await envio.findOne({ id: parseInt(req.params.id) });
            res.status(200).json({ status: 200, data: result });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async deleteEnvio(req, res) {
        try {
            let result = await envio.deleteOne({ id: parseInt(req.params.id) });
            if (!result) return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
            res.status(200).json({ status: 200, message: "Usuario eliminado correctamente" });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async updateEnvio(req, res) {
        try {
            let result = await envio.updateOne({ id: parseInt(req.params.dni) }, { $set: req.body });
            if (!result) return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
            res.status(200).json({ status: 200, message: "Usuario Actualizado Correctamente" });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }
}