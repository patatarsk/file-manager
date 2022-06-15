import fs from 'fs';

const isExist = async (path) => {
  try {
    await fs.promises.access(path);
    return true
  } catch (err) {
    return false;
  }
}

export { isExist };