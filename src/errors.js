export class InvalidOperation extends Error {
  constructor(message = 'Invalid operation') {
    super(message);
  }
}

export class OperationFailed extends Error {
  constructor(message = 'Operation failed') {
    super(message);
  }
}