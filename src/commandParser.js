export const commandParser = (line) => {
  const [command, ...args] = line.split(' ');

  return { command, args };
}