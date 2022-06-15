export const parsePrefixedArgs = (args, prefix) => {
  const parsedArgs = {};
  const argsWithPrefix = args.filter(el => el.startsWith(prefix));
  const argsPairs = argsWithPrefix.join(' ').split(prefix).filter(el => el);
  
  argsPairs.map(el => {
    const [key, value] = el.split('=');
    parsedArgs[key] = value;
  });
  
  return parsedArgs;
};
