import {parsePrefixedArgs} from './src/parsePrefixedArgs.js';
import FileManager from './src/FileManager.js';
import errorHandler from './src/errorHandler.js';
import exitHandler from './src/exitHandler.js';

const {username} = parsePrefixedArgs(process.argv, '--');

const fileManager = new FileManager(username);
fileManager.init();

process.on('uncaughtException', (err) => {
  errorHandler(err);
});

process.on('unhandledRejection', (err) => {
  errorHandler(err);
});

process.on('SIGINT', () => {
  exitHandler(username);
  process.exit(0);
})

//"npm run start -- --username=your_username"