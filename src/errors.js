export class InvalidInput extends Error {
  constructor(message = 'Invalid input') {
    super(message);
  }
}

export class OperationFailed extends Error {
  constructor(message = 'Operation failed') {
    super(message);
  }
}