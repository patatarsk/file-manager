import fs from 'fs';

const isFile = async (path) => {
  try {
    const stats = await fs.promises.lstat(path);
    return stats.isFile();
  } catch (err) {
    return false;
  }
}

export { isFile };