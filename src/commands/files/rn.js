import path from 'path';
import fs from 'fs/promises';
import { OperationFailed } from '../../errors.js';
import { isExist } from '../../utils/isExist.js';

export const rnCommandHandler = async ({args: [srcPath, destPath], fileManager: { currentLocaction }}) => {
  try {
    const source =  path.resolve(currentLocaction, srcPath);
    const destination = path.resolve(currentLocaction, destPath);
    const isSrcExist = await isExist(source);
    const isDestExist = await isExist(destination);

    if (!isSrcExist || isDestExist) {
      throw new OperationFailed();
    }

    await fs.rename(source, destination);
  } catch (error) {
    throw new OperationFailed();
  }
}