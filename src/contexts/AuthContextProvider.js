import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import { auth } from '../fireBase';

export const authContext = React.createContext(); 
const AuthContextProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(false);
    const history = useHistory();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
           if(user) history.push("/chats");
        })
    },[user,history])
    return (
        <authContext.Provider value={user}>
            {!loading && children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;