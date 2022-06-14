import { errorMessage } from './messages.js';

const errorHandler = (error) => {
  errorMessage(error.message);
};

export default errorHandler;