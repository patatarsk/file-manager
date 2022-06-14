import path from 'path';
import fs from 'fs/promises';
import { OperationFailed } from '../../errors.js';
import { isFile } from '../../utils/isFIle.js';

export const rmCommandHandler = async ({args: [srcPath], fileManager: { currentLocaction }}) => {
  try {
    const source =  path.resolve(currentLocaction, srcPath);
    const isFileExist = await isFile(source);

    if (!isFileExist) {
      throw new OperationFailed();
    }

    await fs.rm(source, {recursive: true});
  } catch (error) {
    throw new OperationFailed();
  }
}