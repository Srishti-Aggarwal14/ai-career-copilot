import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState({

    name: "Srishti Aggarwal",

    resume: "AI_Resume.pdf",

    score: 92,

    status: "Uploaded ✅",

    suggestion: "Available 🤖",

  });

  return (

    <UserContext.Provider value={{ user, setUser }}>

      {children}

    </UserContext.Provider>

  );

}

export default UserProvider;