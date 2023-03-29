import Message from "./Message"
import {collection, query, onSnapshot, QuerySnapshot, orderBy} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";


export const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMassages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
  };

  useEffect(scrollToBottom , [messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAT"),
    );
    const userSignOut = onSnapshot(q,(QuerySnapshot) => {
      const messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id});
      });
      setMassages(messages);
    });

    return () => userSignOut;


  }, []);


  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox