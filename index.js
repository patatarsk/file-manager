import { parsePrefixedArgs } from './src/parsePrefixedArgs.js';
import FileManager from './src/FileManager.js';
import errorHandler from './src/errorHandler.js';
import exitHandler from './src/exitHandler.js';
import { exitCommandHandler } from './src/commands/exit.js';
import { upCommandHandler } from './src/commands/navigation/up.js';
import { cdCommandHandler } from './src/commands/navigation/cd.js';
import { lsCommandHandler } from './src/commands/navigation/ls.js';
import { catCommandHandler } from './src/commands/files/cat.js';
import { addCommandHandler } from './src/commands/files/add.js';
import { rnCommandHandler } from './src/commands/files/rn.js';
import { cpCommandHandler } from './src/commands/files/cp.js';
import { mvCommandHandler } from './src/commands/files/mv.js';
import { rmCommandHandler } from './src/commands/files/rm.js';

const { username } = parsePrefixedArgs(process.argv, '--');

const fileManager = new FileManager(username);

fileManager.addCommand('.exit', exitCommandHandler);
fileManager.addCommand('up', upCommandHandler);
fileManager.addCommand('cd', cdCommandHandler);
fileManager.addCommand('ls', lsCommandHandler);
fileManager.addCommand('cat', catCommandHandler);
fileManager.addCommand('add', addCommandHandler);
fileManager.addCommand('rn', rnCommandHandler);
fileManager.addCommand('cp', cpCommandHandler);
fileManager.addCommand('mv', mvCommandHandler);
fileManager.addCommand('rm', rmCommandHandler);

fileManager.init();

process.on('uncaughtException', (error) => {
  errorHandler(error);
});

process.on('unhandledRejection', (error) => {
  errorHandler(error);
});

process.on('SIGINT', () => {
  exitHandler(username);
})

//"npm run start -- --username=your_username"