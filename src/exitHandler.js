import {partingMessage} from './messages.js';

const exitHandler = (username) => {
  process.stdout.write(partingMessage(username));
  process.exit(0);
};

export default exitHandler;