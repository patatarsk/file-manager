import {errorMessage} from './messages.js';

const errorHandler = ({message}) => {
  errorMessage(message);
};

export default errorHandler;