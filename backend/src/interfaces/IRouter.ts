export interface Router {
  id?: string;
  name?: string;
  ip?: string;
  port?: number;
  username?: string;
  password?: string;
  location?: string;
  status?: 'online' | 'offline' | 'error';
  lastSeen?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
