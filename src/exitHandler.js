import { partingMessage } from './messages.js';

const exitHandler = (username) => {
  partingMessage(username);
  process.exit(0);
};

export default exitHandler;