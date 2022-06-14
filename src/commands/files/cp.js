import path from 'path';
import fs from 'fs';
import stream from 'stream/promises';
import { OperationFailed } from '../../errors.js';
import { isExist } from '../../utils/isExist.js';

export const cpCommandHandler = async ({args: [srcPath, destPath], fileManager: { currentLocaction }}) => {
  try {
    const source =  path.resolve(currentLocaction, srcPath);
    const fileName = path.basename(source);
    const destination = path.resolve(currentLocaction, destPath, fileName);
    const isSrcExist = await isExist(source);
    const isDestExist = await isExist(destination);

    if (!isSrcExist || isDestExist) {
      throw new OperationFailed();
    }

    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destination);

    await stream.pipeline(readStream, writeStream);
  } catch (error) {
    throw new OperationFailed();
  }
}