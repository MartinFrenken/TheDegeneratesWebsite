import React, {useEffect, useRef, useState} from "react";
import {Col, Divider, Row} from "antd";
import NavButton from "./nav_button";

export default function Menu(props)
{
    const [hover, setHover] = useState();
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const ref = useRef(null);
    const handleMouseIn = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };
    const onCLickHandler = () => {
      setIsComponentVisible(true)
    };
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
            setHover(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return <div  ref={ref} >
        {!isComponentVisible &&
            <button style={hover ?

                {
                    backgroundColor: "#6BB5C5",
                    borderRadius: "25px",
                    border: "solid white",
                    color: "white"
                    ,
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "900",
                    marginLeft: "1%",
                    marginRight: "1%",
                    marginTop: props.marginButtons - (68-props.marginButtons/2),
                    paddingLeft: 5,
                    paddingRight: 5,
                    float: props.float
                }

                : {
                    backgroundColor: "#149EA0",
                    borderRadius: "25px",
                    border: "solid white",
                    color: "white"
                    ,
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "900",
                    marginLeft: "1%",
                    marginRight: "1%",
                    marginTop: props.marginButtons - (68-props.marginButtons/2),
                    paddingLeft: 5,
                    paddingRight: 5,
                    float: props.float
                }}

                    onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={onCLickHandler}>
                {props.icon}

            </button>
        }
        {isComponentVisible &&
            <div style ={{

                backgroundColor: "#149EA0",
                borderRadius: "25px",
                border: "solid white",
                color: "white"
                ,
                marginLeft: "1%",
                marginRight: "1%",
                marginTop: props.marginButtons - (68-props.marginButtons/2),
                paddingLeft: 20,
                paddingRight: 20,
                float: props.float
            }  }>
            <NavButton text={"The Mint"} refid={"the_mint"} offset={-140}/>
                <Divider style ={{margin:0}}/>
                <NavButton text={"Benefits and utilities"} refid={"benefits_and_utilities"} offset={-120} />
                <Divider style ={{margin:0}}/>
                <NavButton text={"Degenerates App"} refid={"the_app"}  offset={-130}/>
                <Divider style ={{margin:0}}/>
                <NavButton text={"Crypto Mining"} refid={"mining"} offset={-100}/>
                <Divider style ={{margin:0}}/>
                <NavButton text={"Community Roadmap"}  refid={"roadmap"} offset={-100}/>
                <Divider style ={{margin:0}}/>
                <NavButton text={"Special Skin Rewards"} refid={"special_skins"}  offset={-100}/>
                <Divider style ={{margin:0}}/>
                <NavButton text={"The Team"} refid={"team_members"} offset={-290}/>
            </div>

        }
    </div>




}

// font-family: Poppins;
// font-size: 22px;
// font-style: normal;
// font-weight: 900;
// line-height: 20px;
// letter-spacing: 0em;
// text-align: center;

