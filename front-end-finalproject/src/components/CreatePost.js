import React from "react";
import { Link } from "react-router-dom";

function Post({caption, userId, userName, imageSrc, imageAlt }) {
    return(
        <>
        <div className="Post">
            <img src={imageSrc} alt={imageAlt}/>
            <p className="Caption">{caption}</p>
            <p> @{" "} 
            <Link to={`user/${userId}`}>{userName}</Link></p>
        </div>
        </>
    );
}

export default Post;