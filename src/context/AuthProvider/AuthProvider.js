import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // verify email
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // log out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        providerLogin,
        createUser,
        signIn,
        updateUserProfile,
        varifyEmail,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;