import Message from "./Message"
import {collection, query, where, onSnapshot, QuerySnapshot, orderBy} from "firebase/firestore";
import { useState } from "react";


export const ChatBox = () => {
  const [messages, setMassages] = useState([]);

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
      setMassages(messages)
    });

    return userSignOut;


  }, []);


  return (
    <div className="pb-44 pt-20 containerWrap">
       {messages.map(message => (
        <Message key={message.id} message={message} />
       ))}
      
    </div>
  )
}

export default ChatBox