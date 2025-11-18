import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.config';
import { swaggerDocs } from './config/swagger';
import clienteRoutes from './routes/client.routes';
import planRoutes from './routes/plan.routes';
import contratoRoutes from './routes/contract.routes'; 
import serverRoutes from './routes/server.routes';
import monitorRoutes from './routes/monitor.routes';
import routerRoutes from './routes/router.routes'
import connectionsRoutes from "./routes/connections.routes";
import alert from "./routes/alert.routes"


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ⭐ Habilita CORS para permitir peticiones desde el frontend
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],  // cambia este puerto si tu frontend corre en otro
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const PORT = process.env.PORT || 4000;

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/planes', planRoutes);
app.use('/api/contratos', contratoRoutes);
app.use('/api/servers', serverRoutes);
app.use('/api/dashboard', monitorRoutes);
app.use('/api/routers', routerRoutes);
app.use("/api/connections", connectionsRoutes)
app.use("/api/dashboard", alert)




swaggerDocs(app, Number(PORT));

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
