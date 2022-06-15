import { checkQuotes } from "./utils/checkQuotes.js";

export const commandParser = (line) => {
  const [command, ...args] = line.split(' ');
  const filteredArgs = args.filter(arg => arg !== '');
  const parsedArgs = [];

  for (let i = 0; i < filteredArgs.length; i += 1) {
    const currArg = filteredArgs[i];
    const nextArg = filteredArgs[i + 1];
    
    if (currArg && nextArg
        && (checkQuotes('"', currArg, nextArg)
        || checkQuotes('\'', currArg, nextArg))) {
      const concatedArg = currArg + ' ' + nextArg;
      parsedArgs.push(concatedArg.replace(/[\"\']/g, ''));
      i += 1;
    } else {
      parsedArgs.push(currArg);
    }
  }

  return { command, args: parsedArgs };
}