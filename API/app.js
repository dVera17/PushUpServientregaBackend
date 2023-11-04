import express from 'express';
import "dotenv/config";
import routerUser from './routes/user.routes.js';
import routerEnvio from './routes/envio.routes.js';

const app = express();
app.set('hostname', process.env.HOSTNAME_SERVER);
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

app.use('/user', routerUser);
app.use('/envio', routerEnvio);

export default app;