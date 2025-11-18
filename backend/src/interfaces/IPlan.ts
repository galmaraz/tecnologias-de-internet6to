
export interface IPlan {
  name: string;
  downloadSpeed: number;   // Mbps
  uploadSpeed: number;     // Mbps
  price: number;           // Monto en Bs o la moneda que uses
  pppoeProfile: string;    // Nombre del profile en MikroTik
  description?: string; // Nombre del profile en MikroTik
}