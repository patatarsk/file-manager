import path from 'path';
import crypto from 'crypto';
import { OperationFailed } from '../../errors.js';
import { isFile } from '../../utils/isFile.js';
import { readFileWithStream } from '../../utils/readFileWithStream.js';

export const hashCommandHandler = async ({args, fileManager: { currentLocaction, operationResult }}) => {
  console.log('args: ', args);
  try {
    const source =  path.resolve(currentLocaction, srcPath);
    const isFileCheck = await isFile(source);
    console.log('isFileCheck: ', isFileCheck);

    if (!isFileCheck) {
      throw new OperationFailed();
    }

    const algorithm = 'SHA256';
    const fileData = await readFileWithStream(source);
    const hash = crypto.createHash(algorithm).update(fileData).digest('hex');
  
    operationResult(hash);
  } catch (error) {
    throw new OperationFailed();
  }
}