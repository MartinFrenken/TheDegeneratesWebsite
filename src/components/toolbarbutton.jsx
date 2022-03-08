import React,{ useState } from "react";
import {Col, Row} from "antd";

export default function ToolBarButton(props)
{
    const [hover, setHover] = useState();

    const handleMouseIn = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    
    return <>
    <a target="_blank" href={props.link}>
        <button style={hover ?

            {backgroundColor:"#6BB5C5", borderRadius:"25px", border: "solid white", color:"white"
        ,fontFamily: "Poppins", fontSize:"18px", fontWeight:"900",marginLeft:"1%",marginRight:"1%",marginTop:props.marginButtons,paddingLeft:5,paddingRight:5   }

        :{backgroundColor:"#149EA0", borderRadius:"25px", border: "solid white", color:"white"
        ,fontFamily: "Poppins", fontSize:"18px", fontWeight:"900",marginLeft:"1%",marginRight:"1%",marginTop:props.marginButtons,paddingLeft:5,paddingRight:5} }

                onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
    {props.icon}

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

