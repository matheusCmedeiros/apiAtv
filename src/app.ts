import express from 'express';
import directoryRoutes from './router/diretorio-router';

const app = express();
app.use(express.json());

app.use('/diretorio', directoryRoutes);

export default app;
