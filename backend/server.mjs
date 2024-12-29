import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import router from './routes.mjs';

const app = express();
const httpServer = createServer(app);

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors({
    origin: '*', // Permite todos los orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.use('/api', router);


const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});