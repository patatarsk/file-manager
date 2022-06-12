import {coloredFileManagerMessage, coloredOperationResultMesssage, coloredErrorMessage} from './utils/outputColorise.js';

export const greetingMessage = (username) => coloredFileManagerMessage(`Welcome to the File Manager, ${username}!\n`);

export const partingMessage = (username) => coloredFileManagerMessage(`Thank you for using File Manager, ${username}!\n`);

export const currentLocationMessage = (path) => coloredFileManagerMessage(`You are currently in ${path}\n`);

export const operationResultMessage = (result) => coloredOperationResultMesssage(`${result}\n`);

export const errorMessage = (message) => coloredErrorMessage(`${message}\n`);