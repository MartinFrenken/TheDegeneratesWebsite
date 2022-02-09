import React,{ useState } from "react";
import Button from "./button";
import {FaDiscord} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import PageFrame from "./structure/pageframe";
import {Col, Row} from "antd";

export default function Buttons(props) {
    const center ={
        margin: "auto",


    }
return<>
    <Row  type="flex" align="center" justify ="center" >

            <Button style={center}

                link="https://discord.gg/eXUdVGX5"
                icon={<FaDiscord style={{position: "relative", top: 4, fontSize: "40px", left: "-10px", color: "black"}}/>}
                name="Discord">
            </Button>

            <Button style={center}

                link="https://twitter.com/The_DegensNFT"
                icon={<AiOutlineTwitter style={{position:"relative",top:4, fontSize:"40px",left:"-10px", color:"black"}}></AiOutlineTwitter>}
                name="Twitter">
            </Button>

    </Row>
</>
}