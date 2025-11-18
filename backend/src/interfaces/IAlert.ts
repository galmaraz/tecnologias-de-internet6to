export interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  routerName?: string;
  timestamp: Date; // ISO string
  read?: boolean; // opcional, para marcar si ya fue vista
}
