import { useEffect, useState } from "react";
import app from "./firebase.init";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

app();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const signUpEmail = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('')
                setDisplayName(name)
                console.log(result.user);
            })
            .catch((error) => {
                setUser('');
                setError(error.message)
            }).finally(() => {
                setLoading(false);
            })
    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {

            })
            .catch((error) => {

            })
    }

    const logInEmail = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('')
                console.log(result.user);
            })
            .catch((error) => {
                setUser('');
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [user])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        error,
        loading,
        signUpEmail,
        logInEmail,
        logOut

    }
}

export default useFirebase;