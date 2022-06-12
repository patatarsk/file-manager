import readline from 'readline';
import {operationResultMessage, greetingMessage} from './messages.js';

class FileManager {
  constructor(username) {
    this.username = username;
    this.input = process.stdin;
    this.output = process.stdout;
    this.rl = readline.createInterface({
      input: this.input,
    });
  }

  async init() {
    try {
      this.greeting();
      this.rl.on('line', (line) => {
        this.operationResult(line);
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  greeting() {
    this.outputWrite(greetingMessage(this.username));
  }

  location() {
  }

  operationResult(result) {
    this.outputWrite(operationResultMessage(result));
  }

  outputWrite(message) {
    this.output.write(message);
  }
}

export default FileManager;