import { MongoClient } from "mongodb";
import "dotenv/config";
import config from "../config/config.js";

export default class Connect {

    static instance;
    connection;
    db;

    constructor() {
        this.connection = new MongoClient(`mongodb+srv://${config.username}:${config.password}@cluster0.tnoihx3.mongodb.net/${config.database}`);
    }

    static getInstance() {
        if (!Connect.instance) Connect.instance = new Connect();
        return Connect.instance;
    }

    conn() {
        if (!this.db) {
            this.db = this.connection.db();
        }

        return this.db;
    }
}