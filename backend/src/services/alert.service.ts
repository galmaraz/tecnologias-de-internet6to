import AlertModel from '../models/alert.model';
import { Alert } from '../interfaces/IAlert';

export const createAlert = async (alert: Omit<Alert, 'id' | 'timestamp'>) => {
  const newAlert = new AlertModel(alert);
  await newAlert.save();
  return {
    id: newAlert._id.toString(),
    type: newAlert.type,
    message: newAlert.message,
    routerName: newAlert.routerName,
    timestamp: newAlert.timestamp.toISOString(),
    read: newAlert.read,
  };
};

export const getUnreadAlerts = async (limit = 5) => {
  const alerts = await AlertModel.find({ read: false })
    .sort({ timestamp: -1 })
    .limit(limit)
    .exec();

  return alerts.map(a => ({
    id: a._id.toString(),
    type: a.type,
    message: a.message,
    routerName: a.routerName,
    timestamp: a.timestamp.toISOString(),
    read: a.read,
  }));
};
