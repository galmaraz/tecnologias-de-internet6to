import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';
import clienteRoutes from './routes/client.routes';
import planRoutes from './routes/plan.routes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/planes', planRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
