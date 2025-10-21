export interface IServer {
  nombre: string;
  ip: string;
  puerto: number;
  usuario: string;
  password: string;
  estado: 'online' | 'offline'; 
  cpu?: number;     
  trafico?: number;  
  createdAt?: Date;
  updatedAt?: Date;
}
