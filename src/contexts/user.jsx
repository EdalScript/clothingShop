import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }; //the actual context that will wrap my app

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe; //unsubscribe whenever I unmount
    }, []);

    return <UserContext.Provider
        value={value}
    >
        {children}
    </UserContext.Provider>
}