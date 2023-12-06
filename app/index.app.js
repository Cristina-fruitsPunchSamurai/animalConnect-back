import express from 'express';
import router from './routers/main.router.js';
import cors from 'cors';
import userDocFactory from './helpers/user.doc.js'

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(cors('*'));

userDocFactory(app);

app.use(router);

export default app;
