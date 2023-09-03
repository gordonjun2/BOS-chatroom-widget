import { createMockUser } from "near-social-bridge/request/mock";
import { RoomMessage } from "../services/getRoomData";

export const userMockInfo = createMockUser();

export const roomsList = [
  "bbclan",
];

export const messages: RoomMessage[] = [
  {
    accountId: "gordonjun.near",
    blockHeight: 0,
    value: {
      userName: "Bibi",
      userAvatarImage:
        "https://ipfs.near.social/ipfs/bafkreibexmm5sv6i4dlod2awyjciftb3fu3y63wkcsky6wxyei4kzj3v2a",
      text: "Hello guys!",
    },
  },
  {
    accountId: "gordonjun.near",
    blockHeight: 1,
    value: {
      userName: "Bibi",
      userAvatarImage:
        "https://ipfs.near.social/ipfs/bafkreibexmm5sv6i4dlod2awyjciftb3fu3y63wkcsky6wxyei4kzj3v2a",
      text: "All good?",
    },
  },
  {
    accountId: "pipi.near",
    blockHeight: 2,
    value: {
      userName: "Pipi",
      userAvatarImage: "https://i.pravatar.cc/150?u=1",
      text: "Yes man! Look at this image: https://media.tenor.com/kta2ctLgRxkAAAAM/dragon-ball-goku-vs-vegeta.gif",
    },
  },
  {
    accountId: "gordonjun.near",
    blockHeight: 3,
    value: {
      userName: "Bibi",
      userAvatarImage:
        "https://ipfs.near.social/ipfs/bafkreibexmm5sv6i4dlod2awyjciftb3fu3y63wkcsky6wxyei4kzj3v2a",
      text: "So nice!!!",
    },
  },
  {
    accountId: "pipi.near",
    blockHeight: 4,
    value: {
      userName: "Pipi",
      userAvatarImage: "https://i.pravatar.cc/150?u=1",
      text: "Lorem ipsum! But that's all I have.",
    },
  },
  {
    accountId: "mochi.near",
    blockHeight: 5,
    value: {
      userName: "Mochi",
      userAvatarImage: "https://i.pravatar.cc/150?u=2",
      text: "Cool stuff, Pipi. Where did you get this?",
      timestamp: 1681182679331,
    },
  },
];

export let messagesByRoomId = {
  [roomsList[0]]: messages,
};

export const updateMessagesByRoomId = (updatedState: {}) =>
  (messagesByRoomId = { ...updatedState });
