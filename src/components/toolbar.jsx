import React,{ useState } from "react";
import ToolBarButton from "./toolbarbutton";
import {FaDiscord, FaMedium, FaTwitter} from "react-icons/fa";
import PageFrame from "./structure/pageframe";
import {AiFillMediumCircle, AiOutlineMenu, AiOutlineTwitter} from "react-icons/ai";
import Menu from "./menu";

export default function Toolbar(props)
{
    return <div  style={{position:"fixed",top:0, zIndex:"1000",width:"100%"}}  >
                <PageFrame backgroundImage={"header/header_overlay.png"} height = {155} >

                                    <ToolBarButton marginButtons ={props.marginButtons} link ="https://discord.gg/bwcB35Yu" icon = {
                                                <FaDiscord style={{position: "relative", top: 4, fontSize: props.buttonSize, color: "white"}}/>
                                     }/>
                                    <ToolBarButton link ="https://medium.com/@thedegenerates.nft/the-degenerates-the-truly-passive-income-nft-132399fabefe" icon = {
                                                <AiFillMediumCircle style={{position: "relative", top: 4, fontSize: props.buttonSize, color: "white"}}/>
                                     }/>
                                    <ToolBarButton link ="https://twitter.com/The_DegensNFT" icon = {
                                                <AiOutlineTwitter style={{position: "relative", top: 4, fontSize: props.buttonSize, color: "white"}}/>
                        }/>
                                    <Menu  marginButtons ={props.marginButtons} link ="https://twitter.com/The_DegensNFT" icon = {

                            <AiOutlineMenu style={{position: "relative", top: 4, fontSize: props.buttonSize, color: "white"}}/>
                        }

                            float = {"right"}/>
                </PageFrame>




    </div>
}
//<img src={"header/header_overlay.png"} style ={{width:"100%"}}/>