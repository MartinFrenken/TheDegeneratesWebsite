import React,{ useState } from "react";
export default function ClickLogo(props)
{
    return <>
    <div style={{padding:"25px"}}>
    <a href={props.link}>
        <img src={props.image} alt="" width="200px" height="200px"/>
    </a>
    <h6 className="bold" style={{width:"200px",textAlign:"center", color:"white", fontSize:"20px"}}>{props.detail}</h6>
    </div>
    
    </>
}