import {parsePrefixedArgs} from './src/parsePrefixedArgs.js';
import FileManager from './src/FileManager.js';
import errorHandler from './src/errorHandler.js';
import exitHandler from './src/exitHandler.js';
import { exitCommandHandler } from './src/commands/exit.js';
import { upCommandHandler } from './src/commands/up.js';
import { cdCommandHandler } from './src/commands/cd.js';
import { lsCommandHandler } from './src/commands/ls.js';

const {username} = parsePrefixedArgs(process.argv, '--');

const fileManager = new FileManager(username);

fileManager.addCommand('.exit', exitCommandHandler);
fileManager.addCommand('up', upCommandHandler);
fileManager.addCommand('cd', cdCommandHandler);
fileManager.addCommand('ls', lsCommandHandler);

fileManager.init();

process.on('uncaughtException', (err) => {
  errorHandler(err);
});

process.on('unhandledRejection', (err) => {
  errorHandler(err);
});

process.on('SIGINT', () => {
  exitHandler(username);
})

//"npm run start -- --username=your_username"