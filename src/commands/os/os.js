import os from 'os';
import { OperationFailed } from '../../errors.js';

export const osCommandHandler = async ({args, fileManager: { operationResult }}) => {
  try {
    if (args.length > 1) {
      throw new OperationFailed();
    }

    const [flag] = args;
    const flags = ['--EOL', '--cpus', '--homedir', '--username', '--architecture'];

    if (flags.indexOf(flag) === -1) {
      throw new OperationFailed();
    }

    switch (flag) {
      case '--EOL':
        operationResult(eol());
        break;
      case '--homedir':
        operationResult(homedir());
        break;
      case '--username':
        operationResult(username());
        break;
      case '--architecture':
        operationResult(arch());
        break;
      case '--cpus':
        cpus();
        operationResult('');
        break;
    }

  } catch (error) {
    throw new OperationFailed();
  }
}

const eol = () => JSON.stringify(os.EOL);

const homedir = () => os.homedir();

const username = () => os.userInfo().username;

const arch = () => os.arch();

const cpus = () => {
  console.log(`Overall amount of CPUs: ${os.cpus().length}`);
  console.log(cpusInfo());
}

const cpusInfo = () => os.cpus().map(({model, speed}) => ({
  model,
  speed: `${(speed / 1000).toFixed(2)} GHz`,
}));