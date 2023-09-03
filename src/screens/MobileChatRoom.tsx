import { MobileChatRoomScreenProps } from "../routes/NavigationProps";
import ChatRoom from "../components/ChatRoom";
import Container from "../components/Container";

const MobileChatRoom: React.FC<MobileChatRoomScreenProps> = ({ route }) => {
  const { roomId } = route.params;

  return (
    <Container>
      <ChatRoom roomId={roomId} />
    </Container>
  );
};

export default MobileChatRoom;
