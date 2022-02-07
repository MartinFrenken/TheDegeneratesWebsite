import React from "react";

export default function Utility(props) {
    
return <>
    <img src ={props.imageIcon} style={{width:71,height:71}}/>
    <p style={{fontWeight:800,fontSize:30,alignContent:"center"}}>{props.title}</p>
    <p style={{fontWeight:400,fontSize:15,alignContent:"center"}}>{props.text}</p>
</>
}