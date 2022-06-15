import {coloredFileManagerMessage, coloredOperationResultMesssage, coloredErrorMessage} from './outputColorise.js';

export const greetingMessage = (username) => coloredFileManagerMessage(`Welcome to the File Manager, ${username}!`);

export const partingMessage = (username) => coloredFileManagerMessage(`Thank you for using File Manager, ${username}!`);

export const currentLocationMessage = (path) => coloredFileManagerMessage(`You are currently in ${path}`);

export const operationResultMessage = (result) => coloredOperationResultMesssage(result);

export const errorMessage = (message) => coloredErrorMessage(`${message}`);