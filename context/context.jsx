import { createContext,useState } from "react";

export const message_data = createContext();

function Context({children}){
    
 const [message,setMessage] = useState("");

 return(
    <message_data.Provider value={{message,setMessage}}>

        {children}
    </message_data.Provider>
 );
}

export default Context;