import {
  createMock,
  // mockInitialPayload,
  mockUser,
} from "near-social-bridge/request/mock";
import getRoomDataMock from "./services/getRoomData.mock";
import sendMessageMock from "./services/sendMessage.mock";
import { userMockInfo } from "./shared";

const mock = () => {
  // Mock initial payload
  // mockInitialPayload({
  //   mainChatURL: 'http://localhost:3001/#/view/ChatV2',
  //   room: "dragon-ball-z",
  // });

  // Mock user
  mockUser(userMockInfo);

  // Mock requests
  createMock("get-room-data", getRoomDataMock);
  createMock("send-message", sendMessageMock);
  // createMock("set-clipboard-text", () => ({}));
};

export default mock;
