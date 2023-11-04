import { userSchema } from "../Dtos/schemas.js";
import Connect from "../db/Connect.js";

const db = Connect.getInstance().conn();
const usuario = db.collection('usuario');

export default class UserService {
    static async registerUser(req, res) {
        try {
            const validacion = userSchema.safeParse(req.body);
            if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`) });

            let result = await usuario.insertOne(req.body);
            if (!result) return res.status(401).json({ status: 401, message: "Ups, ha ocurrido un problema!" })
            res.status(200).json({ status: 200, message: "Usuario agregado con exito" })
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" })
        }
    }

    static async getAllUsers(req, res) {
        try {
            let result = await usuario.find({}).toArray();
            res.status(200).json({ status: 200, data: result });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async getUserById(req, res) {
        try {
            let result = await usuario.findOne({ dni: parseInt(req.params.dni) });
            res.status(200).json({ status: 200, data: result });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async deleteUser(req, res) {
        try {
            let result = await usuario.deleteOne({ "dni": parseInt(req.params.dni) });
            if (!result) return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
            res.status(200).json({ status: 200, message: "Usuario eliminado correctamente" });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }

    static async updateUser(req, res) {
        try {
            let result = await usuario.updateOne({ dni: parseInt(req.params.dni) }, { $set: req.body });
            if (!result) return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
            res.status(200).json({ status: 200, message: "Usuario Actualizado Correctamente" });
        } catch (error) {
            console.log(error);
            res.json({ message: "Error" });
        }
    }
}