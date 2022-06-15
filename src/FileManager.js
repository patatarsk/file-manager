import readline from 'readline';
import os from 'os';
import EventEmitter from 'events';
import { operationResultMessage, greetingMessage, currentLocationMessage } from './messages.js';
import { commandParser } from './commandParser.js';
import { InvalidInput, OperationFailed } from './errors.js';

class FileManager {
  constructor(username) {
    this.username = username;
    this.input = process.stdin;
    this.currentLocaction = os.homedir();
    this.rl = readline.createInterface({
      input: this.input,
    });
    this.eventEmmiter = new EventEmitter();
    this.operationResult = this.operationResult.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  init() {
    try {
      this.greeting();
      this.rl.on('line', (line) => {
        const { command, args } = commandParser(line);
        const isEvent = this.eventEmmiter.emit(command, { args, fileManager: this });

        if (!isEvent) {
          throw new InvalidInput();
        }

      });
    } catch (error) {
      throw new OperationFailed();
    }
  }

  greeting() {
    greetingMessage(this.username);
    this.location();
  }

  location() {
    currentLocationMessage(this.currentLocaction);
  }

  setLocation(location) {
    this.currentLocaction = location;
    this.location();
  }

  operationResult(result) {
    operationResultMessage(result);
    this.location();
  }

  addCommand(command, handler) {
    this.eventEmmiter.on(command, handler);
  }
}

export default FileManager;