import {createContext,useState} from "react";

export const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState();





    return(
        <FirebaseAuthContext.Provider value = {{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>

    )
}

export default AuthContextProvider;