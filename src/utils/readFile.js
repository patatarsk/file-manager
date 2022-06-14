import fs from 'fs';

export const readFile = async (path) => {
  return await new Promise((resolve, reject) => {
    try {
      const fileStream = fs.createReadStream(path);
      let res = '';
  
      fileStream.on('data', (chunk) => {
        res += chunk;
      });
  
      fileStream.on('error', (error) => {
        reject(error);
      });
  
      fileStream.on('end', () => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
}