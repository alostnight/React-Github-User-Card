import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width:250px;
  margin: 100px;
  justify-content: space-evenly;
`;

const StyledH1 = styled.h1`
  color:black;
  margin-left:20px;
`;




const Bold = styled.p`
  display:inline-block;
  font-weight:bold;
`

export default function UserCard(props) {
    return(
        <Styled>
            <img src={props.avatar_url}/>
            <StyledH1>{props.login}</StyledH1>
        </Styled>
    );
}