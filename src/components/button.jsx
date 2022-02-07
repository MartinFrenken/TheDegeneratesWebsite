import React,{ useState } from "react";
import {Col, Row} from "antd";

export default function Button(props)
{
    const [hover, setHover] = useState();

    const handleMouseIn = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    
    return <>
    <a href={props.link}>
        <button style={hover ? {backgroundColor:"#6BB5C5", borderRadius:"25px", border: "solid white", color:"white"
        ,fontFamily: "Poppins", fontSize:"18px", fontWeight:"900", width:"170px",margin:10} :{backgroundColor:"#2C96AD", borderRadius:"25px", border: "solid white", color:"white"
        ,fontFamily: "Poppins", fontSize:"18px", fontWeight:"900", width:"170px",margin:10} } onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
    {props.icon}
                   <s style={{textDecoration:"none", bottom:"8px", position:"relative"}}>{props.name}</s>
        </button>
    </a>

    </>




}

// font-family: Poppins;
// font-size: 22px;
// font-style: normal;
// font-weight: 900;
// line-height: 20px;
// letter-spacing: 0em;
// text-align: center;

