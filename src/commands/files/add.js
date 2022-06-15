import path from 'path';
import fs from 'fs';
import { OperationFailed } from '../../errors.js';
import { isDir } from '../../utils/isDir.js';
import { isFile } from '../../utils/isFileCheck.js';

export const addCommandHandler = async ({args: [fileName], fileManager: { currentLocaction }}) => {
  try {
    const destination =  path.resolve(currentLocaction, fileName);
    const isFileCheck = await isFile(destination);
    const isDirCheck = await isDir(destination);

    if (isFileCheck || isDirCheck) {
      throw new OperationFailed();
    }

    const fileStream = fs.createWriteStream(destination);
    
    fileStream.on('error', () => {
      throw new OperationFailed();
    });

    fileStream.end('');
  } catch (error) {
    throw new OperationFailed();
  }
}