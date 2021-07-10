import { useState, useRef } from "react";
import { db, auth, firebaseRef } from "./../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageCard from "./MessageCard";
import firebase from "firebase";

const ChatRoom = ({ currentRoom }) => {
  const customRef = useRef();
  const messagesRef = db.collection("messages");
  const query = messagesRef
    .where("room", "==", currentRoom)
    .orderBy("createdAt")
    .limit(20);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const { uid, photoURL, displayName, email } = auth.currentUser;
    await messagesRef.add({
      uid,
      photoURL,
      createdAt,
      text: message,
      room: currentRoom,
      userName: displayName,
      email: email,
    });

    setMessage("");
    customRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (createdAt, id) => {
    db.collection("messages").doc(id).delete();
  };
  return (
    <>
      <div className="messages">
        {messages &&
          messages.map((message) => (
            <MessageCard
              message={message}
              key={message.id}
              handleDelete={handleDelete}
            />
          ))}
        <span ref={customRef}></span>
      </div>

      <form className = "form_chat" onSubmit={handleSubmit}>
        <textarea className="chat_textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your messages here"
        />
        <button className="button_chat" class="btn btn-danger" type="submit" disabled={!message}>
          Send
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
