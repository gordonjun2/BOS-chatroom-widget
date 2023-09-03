/**
 * TODO: hide "Leave" button using props
 */

/**
 * This Widget was built using NEAR Social Bridge library.
 * Visit https://github.com/wpdas/near-social-bridge to get to know more.
 */

/**
 * App setup
 */
const isMember = props.isMember ?? true;
const room = props.room ?? "bbclan";

const externalAppUrl = "http://localhost:3000";

const path = props.path;
const initialViewHeight = 740;
const initialPayload = {
  mainChatURL: "https://alpha.near.org/gordonjun.near/widget/bbclanChatRoom",
  isMember: isMember,
  room: room, // starts with this room
};

State.init({
  showShareModal: false,
  clipboardText: "",
});

/**
 * Request Handlers.
 */
const requestHandler = (request, response, Utils) => {
  switch (request.type) {
    case "get-room-data":
      getRoomDataHandler(request, response, Utils);
      break;
    case "send-message":
      sendMessageHandler(request, response);
      break;
  }
};

const getRoomDataHandler = (request, response, Utils) => {
  const { payload } = request;

  if (!payload.roomId) {
    response(request).send({ error: "roomId prop must be provided" });
    return;
  }

  Utils.promisify(
    () =>
      Social.index(payload.roomId, "data", {
        subscribe: true,
        limit: 100,
        order: "desc",
      }),
    (roomData) => {
      const roomExists = roomData && roomData.length > 0;
      if (!roomExists) {
        response(request).send({ error: "room not found" });
        return;
      }
      response(request).send({ messages: roomData });
    },
    (err) => {
      response(request).send({ error: "internal error" });
    }
  );
};

const sendMessageHandler = (request, response) => {
  const { payload } = request;
  if (payload.roomId && payload.message) {
    // Store message.
    Social.set(
      {
        index: {
          [payload.roomId]: JSON.stringify(
            {
              key: "data",
              value: payload.message,
            },
            undefined,
            0
          ),
        },
      },
      {
        force: true,
        onCommit: () => {
          response(request).send({});
        },
        onCancel: () => {
          response(request).send({ error: "the action was canceled" });
        },
      }
    );
    return;
  }

  // Error
  response(request).send({
    error: "you must provide the roomId and a message prop",
  });
};

const Wrapper = styled.div`
  max-height: 500px;
  height: 100%; /* Set an explicit height */
  display: block;
  clear: both;
  overflow-y: auto; /* Add vertical scrollbar when content exceeds max-height */
`;

return (
  <div>
    <Wrapper>
      <Widget
        src="wendersonpires.near/widget/NearSocialBridgeCore"
        props={{
          externalAppUrl,
          path,
          initialViewHeight,
          initialPayload,
          requestHandler,
        }}
      />
    </Wrapper>
  </div>
);
