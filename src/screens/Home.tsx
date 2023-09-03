import { useState } from "react";
import {
  Box,
  Spinner,
} from "@chakra-ui/react";
import { PreHomeScreenProps } from "../routes/NavigationProps";
import Container from "../components/Container";
import Content from "../components/Content";
import ChatRoom from "../components/ChatRoom";
import useTypedInitialPayload from "../hooks/useTypedInitialPayload";

const Home: React.FC<PreHomeScreenProps> = ({ navigation }) => {
  const { isMember, room } = useTypedInitialPayload();
  const [roomId, setRoomId] = useState(room || "bbclan");

    // Use setRoomId immediately if needed
    if (!room) {
        setRoomId("bbclan");
    }

  return (
    <Container>
      <Content direction="row">
        (
          <>
            {isMember ? (
              <ChatRoom roomId={roomId} />
            ) : (
              <Box w="100%" display="flex">
                <Spinner
                  margin="auto"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="teal.500"
                  size="xl"
                />
              </Box>
            )}
          </>
        )
      </Content>
    </Container>
  );
};

export default Home;