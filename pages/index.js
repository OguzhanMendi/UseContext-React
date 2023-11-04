
import { message_data } from "@/context/context";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function  Home()  {

   const {message,setMessage} = useContext(message_data);
   
   const router = useRouter();
   
   const sendData = ()=>{
    const gonderilicek_mesaj ="Hello World";
    // const message='Hello World';
    setMessage(gonderilicek_mesaj);
   }


  return (
    <>
   <header>
    
    <div>
      <button onClick={()=>{router.push("/share")} } style={{
      marginTop:'50px',
    }}
    
    >Second component</button>
    </div>

    <button onClick={()=>{ sendData()}} style={{
      marginTop:'50px',
    }}>
      Send data

    </button>
   </header>
    </>
  )
}
