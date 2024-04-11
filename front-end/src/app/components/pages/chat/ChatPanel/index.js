import ChatBox from "./boxes/ChatBox";
import ConnectionFailedBox from "./boxes/ConnectionFailedBox";
import PartnerDisconnectedBox from "./boxes/PartnerDisconnectedBox";
import SelfDisconnectedBox from "./boxes/SelfDisconnectedBox";
import WaitingBox from "./boxes/WaitingBox";

export default function ChatPanel({ chat }) {
  return (
    <div className="container">
      {chat == "connectionFailed" && <ConnectionFailedBox />}
      {chat === "waiting" && <WaitingBox />}
      {chat === "paired" && <ChatBox />}
      {chat === "partnerDisconnected" && <PartnerDisconnectedBox />}
      {chat === "selfDisconnected" && <SelfDisconnectedBox />}
    </div>
  );
}
