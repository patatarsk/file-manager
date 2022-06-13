import { OperationFailed } from '../errors.js';
import { isDir } from '../utils/isDir.js';
import path from 'path';

export const cdCommandHandler = async ({args: [destPath], fileManager: { currentLocaction, setLocation }}) => {
  try {
    const destination =  path.resolve(currentLocaction, destPath);
    const isDirectory = await isDir(`${destination}`);

    if (!isDirectory) {
      throw new OperationFailed();
    }

    setLocation(destination);
  } catch (error) {
    throw new OperationFailed();
  }
}