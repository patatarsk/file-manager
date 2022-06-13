const errorColor = '\x1b[31m%s';
const messageColor = '\x1b[35m%s';
const resultColor = '\x1b[32m%s';
const resetColor = '\x1b[0m';

export const coloredErrorMessage = (text) => console.log(errorColor, text, resetColor);

export const coloredFileManagerMessage = (text) => console.log(messageColor, text, resetColor);

export const coloredOperationResultMesssage = (text) => console.log(resultColor, text, resetColor);