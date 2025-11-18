export interface IClient {
  _id?: string;
  nombre: string;
  ci: string;
  telefono: string;
  email: string;
  direccion: string;
  fechaRegistro?: Date;
  estado?: 'activo' | 'inactivo' | 'suspendido'; 
}
