import exitHandler from "../exitHandler.js";

export const exitCommandHandler = ({fileManager}) => {
  exitHandler(fileManager.username);
}