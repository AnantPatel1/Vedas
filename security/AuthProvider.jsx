import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase"; // Path to your firebase.js file
import firebase from "./firebase";

const AuthContext = createContext({
  currentUser: null,
});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for Firebase authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
