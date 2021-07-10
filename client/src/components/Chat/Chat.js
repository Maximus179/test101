import { auth } from "./../../firebase";
import { useState, useEffect } from "react";
import NavBar from "./Chatcomp/NavBar";
import Spinner from "./Chatcomp/Spinner";
import ChatRoom from "./Chatcomp/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import './Chat.scss';

const Chat = () => {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("Brobots");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="chat">
      {loading && <Spinner />}
      <NavBar
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <div className="content_chat">
        <ChatRoom currentRoom={currentRoom}/>
      </div>
    </div>
  );
};

export default Chat;
