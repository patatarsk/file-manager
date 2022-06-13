import fs from 'fs/promises';
import { OperationFailed } from '../errors.js';
import { isDir } from '../utils/isDir.js';

export const lsCommandHandler = async ({fileManager: { currentLocaction, operationResult }}) => {
  try {
    const isDirectory = await isDir(currentLocaction);

    if (!isDirectory) {
      throw new OperationFailed();
    }

    const dirFilling = await fs.readdir(currentLocaction);
    operationResult(dirFilling);
  } catch (error) {
    throw new OperationFailed();
  }
}