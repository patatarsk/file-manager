import path from 'path';
import fs from 'fs';
import stream from 'stream/promises';
import zlib from 'zlib';
import { OperationFailed } from '../../errors.js';
import { isExist } from '../../utils/isExist.js';
import { isDir } from '../../utils/isDir.js';

export const compressCommandHandler = async ({args: [srcPath, destPath], fileManager: { currentLocaction }}) => {
  try {
    const source =  path.resolve(currentLocaction, srcPath);
    const fileName = path.basename(source);
    let destination = path.resolve(currentLocaction, destPath);

    const isSrcExist = await isExist(source);

    if (!isSrcExist) {
      throw new OperationFailed();
    }

    const isDestDir = await isDir(destination);

    if (isDestDir) {
      destination = path.resolve(destination, fileName);
    }

    const isDestExist = await isExist(destination);

    if (isDestExist) {
      throw new OperationFailed();
    }

    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destination);

    await stream.pipeline(readStream, zlib.createBrotliCompress(), writeStream);
  } catch (error) {
    throw new OperationFailed();
  }
};