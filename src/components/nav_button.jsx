import React, {useEffect, useRef, useState} from "react";
import {Col, Row} from "antd";
import {Link} from 'react-scroll'
export default function NavButton(props)
{
    const [hover, setHover] = useState();

    const handleMouseIn = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    const onCLickHandler = () => {

    };



    return <div   >
        <Link  to={props.refid} spy={true} smooth={true}  offset={props.offset} style={{color: "white"}}>
            <button style={hover ?

                {
                    backgroundColor: "#6BB5C5",
                    border: "none",
                    // borderRadius: "25px",
                    // borderStyle: "none",
                    // color: "white"
                    // ,
                    // fontFamily: "Poppins",
                    // fontSize: "18px",
                    // fontWeight: "900",
                    // marginLeft: "1%",
                    // marginRight: "1%",
                    // marginTop: props.marginButtons - 65,
                    paddingLeft: 20,
                    paddingRight: 5,
                    // float: props.float
                }

                : {
                    backgroundColor: "#149EA0",
                    // borderStyle: "none",
                    border: "none",
                    // color: "white"
                    // ,
                    // fontFamily: "Poppins",
                    // fontSize: "18px",
                    // fontWeight: "900",
                    // marginLeft: "1%",
                    // marginRight: "1%",
                    // marginTop: props.marginButtons - 65,
                    paddingLeft: 20,
                    paddingRight: 5,
                    // float: props.float
                }}

                    onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={onCLickHandler}>
                {props.text}

            </button>
        </Link>
    </div>




}

// font-family: Poppins;
// font-size: 22px;
// font-style: normal;
// font-weight: 900;
// line-height: 20px;
// letter-spacing: 0em;
// text-align: center;

