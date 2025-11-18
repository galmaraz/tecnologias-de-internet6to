export interface ActiveConnection {
  id: string;
  clientName: string;
  pppoeUsername: string;
  ipAddress: string;
  routerName: string;
  connectedTime: string;
  rxBytes: number;
  txBytes: number;
}
