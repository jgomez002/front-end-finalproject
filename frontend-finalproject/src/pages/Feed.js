import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Post from "../components/PostForm"

function Feed({
    isLoading,
    isLoggedIn,
    setLoggedIn, 
    setUserInformation,
    userInformation
}) {
    const navigate = useNavigate();

     useEffect(()=> {
        if(!isLoggedIn && !isLoading) navigate("/login");
    }, [isLoading, isLoggedIn]); 

    return(
        <>
    <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUserInformation= {setUserInformation}/> 
            <div className="PageWrapper">
            <h1> Feed: Where users will access following/friends feed</h1>
            <p><strong> Display Name: </strong>{userInformation.displayName}</p>
            <p><strong> Email: </strong>{userInformation.email}</p>
            <div className="Post-wrapper">
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>  
        </>
    );
    }

export default Feed;