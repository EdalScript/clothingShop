import { createContext, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }; //the actual context that will wrap my app
    return <UserContext.Provider
        value={value}
    >
        {children}
    </UserContext.Provider>
}