import path from 'path';
import { OperationFailed } from '../errors.js';

export const upCommandHandler = ({fileManager}) => {
  try {
    const newLocation = path.resolve(fileManager.currentLocaction, '..');

    fileManager.setLocation(newLocation);
  } catch (error) {
    throw new OperationFailed();
  }
}