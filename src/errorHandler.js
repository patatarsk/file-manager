import {errorMessage} from './messages.js';

const errorHandler = ({message}) => {
  console.error(errorMessage(message));
  process.exit(1);
};

export default errorHandler;