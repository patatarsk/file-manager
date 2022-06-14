import path from 'path';
import { OperationFailed } from '../../errors.js';
import { isFile } from '../../utils/isFile.js';
import { readFileWithStream } from '../../utils/readFileWithStream.js';

export const catCommandHandler = async ({args: [filePath], fileManager: { currentLocaction, operationResult }}) => {
  try {
    const destination =  path.resolve(currentLocaction, filePath);
    const isFileCheck = await isFile(destination);

    if (!isFileCheck) {
      throw new OperationFailed();
    }

    const data = await readFileWithStream(destination);
    operationResult(data);
  } catch (error) {
    throw new OperationFailed();
  }
}