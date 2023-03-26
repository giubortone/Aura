import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export const SendMessage = () => {
  const[value,Setvalue] = useState("");
  //const {currentUser} = //deberia ir como conseguir al usuario aqui
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === ""){
      alert("Entra un mensaje valido");
      return;
    }

    try{
      const {uid, displayName, photoUrl} = //y ponerlo aqui
      await addDoc(collection(db,"messages",{
        text: value,
        name: displayName,
        avatar: photoUrl,
        createdAT: serverTimestamp(),
        uid 
      }))
    } catch(error){
      console.log(error);
    }
    console.log(value);
    setValue("");
  }


  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className ="px-2 containerWrap flex">
        <input value={value} onChange={e => Setvalue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage