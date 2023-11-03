import express from 'express';
import "dotenv/config";

const app = express();
app.set('hostname', process.env.HOSTNAME_SERVER);
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

export default app;