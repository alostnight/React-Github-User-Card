import React from "react";

export default function UserCard(props) {
    return(
        <div>
            <img src={props.avatar_url}/>
            <h1>{props.login}</h1>
        </div>
    );
}