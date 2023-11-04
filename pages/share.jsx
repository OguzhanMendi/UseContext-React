
import { useRouter } from "next/router";
import { message_data } from "@/context/context";
import { useContext } from "react";
export default function Share(){
    const {message} = useContext(message_data);
    const router = useRouter();
    return(<>
    <h2>Share Component </h2>
    <div>
      <button onClick={()=>{
        router.push("/")
      }}
      >First component</button>
    </div>
    <h3>Mesaj : {message}</h3>
    </> 
       );
}