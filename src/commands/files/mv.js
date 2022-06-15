import { OperationFailed } from '../../errors.js';
import { cpCommandHandler } from './cp.js';
import { rmCommandHandler } from './rm.js';

export const mvCommandHandler = async ({args, fileManager}) => {
  try {
    await cpCommandHandler({args, fileManager});
    await rmCommandHandler({args, fileManager});
  } catch (error) {
    throw new OperationFailed();
  }
}