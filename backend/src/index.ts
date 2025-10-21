import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';
import { swaggerDocs } from './config/swagger';
import clienteRoutes from './routes/client.routes';
import planRoutes from './routes/plan.routes';
import contratoRoutes from './routes/contract.routes'; 
import serverRoutes from './routes/server.routes';
import monitorRoutes from './routes/monitor.routes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/planes', planRoutes);
app.use('/api/contratos', contratoRoutes);
app.use('/api/servers', serverRoutes);
app.use('/api/dashboard', monitorRoutes);


swaggerDocs(app, Number(PORT));

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
