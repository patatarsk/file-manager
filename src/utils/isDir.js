import fs from 'fs';

const isDir = async (path) => {
  try {
    const stats = await fs.promises.lstat(path);
    return stats.isDirectory();
  } catch (err) {
    return false;
  }
}

export { isDir };