const errorColor = '\x1b[31m';
const messageColor = '\x1b[35m';
const resultColor = '\x1b[32m';
const resetColor = '\x1b[0m';

export const coloredErrorMessage = (text) => `${errorColor}${text}${resetColor}`;

export const coloredFileManagerMessage = (text) => `${messageColor}${text}${resetColor}`;

export const coloredOperationResultMesssage = (text) => `${resultColor}${text}${resetColor}`;